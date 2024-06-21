import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { PrimaryRouter } from 'routes/PrimaryRoutes';
import { useAuth } from 'hooks/useAuth';
import Fallback from 'components/Fallback';

/**
 * App component.
 *
 * Component for managing app
 *
 * @component
 * @returns {JSX.Element} - The rendered App component.
 */
const App = () => {
  const { isAuthenticated } = useAuth();

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      await Notification.requestPermission();
    }
  };

  useEffect(() => {
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

  return (
    <PrimeReactProvider>
      {isAuthenticated ? (
        <RouterProvider router={PrimaryRouter} />
      ) : (
        <Fallback />
      )}
    </PrimeReactProvider>
  );
};

export default App;
