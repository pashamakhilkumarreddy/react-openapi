import { useEffect } from 'react';

/**
 * Custom hook for handling authentication.
 * @returns {object} An object containing user authentication information.
 * @property {boolean | undefined} isAuthenticated - Indicates whether the user is authenticated.
 */
export const useAuth = () => {
  const isAuthenticated = true;
  useEffect(() => {}, []);

  return {
    isAuthenticated,
  };
};
