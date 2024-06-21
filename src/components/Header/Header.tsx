import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderLinks as links } from 'config';

/**
 * The `Header` component displays the navigation bar of the application.
 * It includes the application title, user location (if available), navigation links, and an online/offline status indicator.
 * The header adjusts its layout for mobile and desktop views.
 *
 * @component
 *
 * @example
 * return (
 *   <Header />
 * );
 */
const Header: React.FC = () => {
  const { t } = useTranslation();

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const watcherID = navigator.geolocation.watchPosition(
      (position) => console.info(position),
      (error) => console.error(error)
    );

    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      navigator.geolocation.clearWatch(watcherID);
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  };

  return (
    <header className="w-full border border-solid border-b-slate-950 bg-slate-100 shadow-md shadow-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-xl font-bold text-gray-900">
                {t('header.message')}
              </h1>
              &nbsp;
              {position && (
                <div className="flex justify-center">
                  <p className="text-sm font-bold text-gray-900">
                    You are at:&nbsp;&nbsp;
                  </p>
                  <p className="text-sm text-gray-900">
                    <span>Lat: {position.lat},</span>
                    <span>Long: {position.lng}</span>
                  </p>
                </div>
              )}
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {links.map(({ name, link }) => (
                <a
                  key={link}
                  href={link}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-slate-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              {isOnline ? (
                <Button
                  className="text-green-500"
                  label={t('general.message.online')}
                  severity="success"
                />
              ) : (
                <Button
                  label={t('general.message.offline')}
                  className="text-red-500"
                />
              )}
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {links.map(({ name, link }) => (
            <a
              key={link}
              href={link}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
