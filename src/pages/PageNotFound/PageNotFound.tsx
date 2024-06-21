import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

/**
 * The `NotFound` component is displayed when a user navigates to a route that does not exist.
 * It provides a message indicating that the page was not found and offers a button to navigate back to the home page.
 *
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 */
const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex-column align-items-center justify-content-center flex min-h-screen">
      <h1 className="mb-5 text-6xl text-primary">404</h1>
      <p className="mb-5 text-xl">
        Oops! The page you are looking for does not exist.
      </p>
      <Button
        label="Go to Home"
        icon="pi pi-home"
        className="p-button-primary"
        onClick={handleGoHome}
      />
    </div>
  );
};

export default NotFound;
