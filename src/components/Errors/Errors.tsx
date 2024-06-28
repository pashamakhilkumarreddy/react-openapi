import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';

/**
 * ErrorPage component.
 *
 * This component is responsible for rendering an error page when an error occurs during navigation.
 * It displays a generic error message and provides a button to navigate back to the previous page.
 * @component
 * @returns {JSX.Element} The JSX element representing the error page with a message and a "Go Back" button.
 */
const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const getErrorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return error.data || error.statusText;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      return 'Unknown error';
    }
  };

  const errorMessage = getErrorMessage(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
