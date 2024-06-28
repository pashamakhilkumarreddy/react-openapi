import React, { useEffect, Profiler } from 'react';
import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { PrimaryRouter } from 'routes/PrimaryRoutes';
import { useAuth } from 'hooks/useAuth';
import Fallback from 'components/Fallback';

type ProfilerOnRenderCallback = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<any>
) => void;

/**
 * App component for managing the main application layout.
 *
 * This component sets up the app with notification permissions and handles rendering
 * based on user authentication status. It also includes performance profiling using React's
 * Profiler component.
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  /**
   * Requests notification permission from the user.
   *
   * Uses the Notification API to request permission if supported by the browser.
   * @returns {Promise<void>} A promise that resolves when the permission request is complete.
   */
  const requestNotificationPermission = async (): Promise<void> => {
    if ('Notification' in window) {
      await Notification.requestPermission();
    }
  };

  useEffect(() => {
    /**
     * Initializes the application by requesting notification permission and showing a test notification.
     * @returns {Promise<void>} A promise that resolves when the initialization is complete.
     */
    const initializeApp = async () => {
      await requestNotificationPermission();

      const notification = new Notification('Test', {
        body: 'Hey, this is a test notification',
        icon: './assets/notification.png',
      });

      setTimeout(() => notification.close(), 4000);
    };

    initializeApp();
  }, []);

  const queue: Array<{
    id: string;
    phase: 'mount' | 'update';
    actualDuration: number;
    baseDuration: number;
    startTime: number;
    commitTime: number;
    interactions: Set<any>;
  }> = [];

  useEffect(() => {
    /**
     * Sets up an interval to send profiling data every 5 seconds.
     *
     * Cleans up the interval on component unmount.
     */
    const intervalId = setInterval(sendProfileQueue, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  /**
   * Callback function for React's Profiler component to collect performance data.
   * @param {string} id - The id of the Profiler.
   * @param {'mount' | 'update'} phase - The phase in which the render occurred.
   * @param {number} actualDuration - The time spent rendering.
   * @param {number} baseDuration - The time required to render the base component.
   * @param {number} startTime - The start time of the render.
   * @param {number} commitTime - The commit time of the render.
   * @param {Set<any>} interactions - The interactions involved in the render.
   */
  const onRenderCallback: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    queue.push({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  };

  /**
   * Sends the collected profiling data to the server.
   *
   * Clears the queue after sending the data.
   * @returns {Promise<void>} A promise that resolves when the data is sent.
   */
  const sendProfileQueue = async (): Promise<void> => {
    if (!queue.length) {
      return;
    }
    const queueToSend = [...queue];
    queue.length = 0;
    console.info('sending profile queue', queueToSend);
  };

  return (
    <PrimeReactProvider>
      {/* @ts-ignore */}
      <Profiler id="App" onRender={onRenderCallback}>
        {isAuthenticated ? (
          <RouterProvider router={PrimaryRouter} />
        ) : (
          <Fallback />
        )}
      </Profiler>
    </PrimeReactProvider>
  );
};

export default App;
