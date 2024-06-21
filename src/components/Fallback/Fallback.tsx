import { ProgressSpinner } from 'primereact/progressspinner';

/**
 * Fallback component.
 *
 * This component is used to display a loading indicator when the content is being loaded.
 * It shows a message indicating that loading is in progress and includes a spinner
 * to visually represent the loading state.
 *
 * @component
 * @example
 * return <Fallback />;
 *
 * @returns {JSX.Element} The JSX element containing a loading message and spinner.
 */
const Fallback = () => {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center gap-4">
      <div className="text-xl font-bold">Loading...</div>

      <ProgressSpinner />
    </div>
  );
};

export default Fallback;
