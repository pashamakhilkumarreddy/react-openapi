import React from 'react';

/**
 * The `Footer` component renders the footer section of the application.
 * It includes the application name and copyright notice, as well as social media links.
 * The footer is styled to be displayed at the bottom of the page.
 * 
 * @component
 * 
 * @example
 * return (
 *   <Footer />
 * );
 * 
 * @returns {JSX.Element} The JSX element representing the footer of the application.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center mb-4 md:mb-0">
            <h2 className="text-lg font-bold">React OpenAPI &nbsp;</h2>
            <p className="text-gray-400">
              &copy; 2024 React OpenAPI. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C1.009 0 .669.34.669.755v21.491C.669 23.661 1.009 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.339c0-3.1 1.89-4.789 4.649-4.789 1.324 0 2.462.099 2.794.142v3.24h-1.919c-1.504 0-1.794.715-1.794 1.763v2.312h3.59l-.468 3.622h-3.122V24h6.125c.316 0 .656-.34.656-.754V.755c0-.415-.34-.755-.756-.755z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.774 1.014-.604 1.794-1.562 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.557-3.591-1.557-2.719 0-4.923 2.204-4.923 4.917 0 .385.045.762.126 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.562-.666 2.475 0 1.709.87 3.217 2.188 4.096-.807-.025-1.566-.247-2.228-.616v.062c0 2.388 1.693 4.384 3.946 4.842-.412.112-.848.171-1.296.171-.316 0-.623-.03-.923-.086.623 1.943 2.432 3.355 4.573 3.395-1.676 1.315-3.791 2.102-6.084 2.102-.395 0-.786-.023-1.17-.068 2.166 1.393 4.735 2.209 7.506 2.209 9.009 0 13.932-7.457 13.932-13.932 0-.213 0-.426-.015-.637.961-.693 1.8-1.56 2.462-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.976.975 1.245 2.243 1.307 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.976-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.976-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.976 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.07-1.548.071-2.971.33-4.064 1.422C1.926 3.626 1.667 5.049 1.596 6.597c-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.071 1.548.33 2.971 1.422 4.064 1.093 1.093 2.516 1.352 4.064 1.422 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.548-.071 2.971-.33 4.064-1.422 1.093-1.093 1.352-2.516 1.422-4.064.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.071-1.548-.33-2.971-1.422-4.064C20.191 2.493 18.768 2.234 17.22 2.163 15.94 2.104 15.532 2.092 12 2.092zm0 5.838c-3.403 0-6.161 2.757-6.161 6.161s2.758 6.161 6.161 6.161 6.161-2.758 6.161-6.161-2.758-6.161-6.161-6.161zm0 10.164c-2.212 0-4.003-1.79-4.003-4.003s1.79-4.003 4.003-4.003 4.003 1.79 4.003 4.003-1.79 4.003-4.003 4.003zm6.406-11.845c-.796 0-1.44-.644-1.44-1.44 0-.796.644-1.44 1.44-1.44.796 0 1.44.644 1.44 1.44 0 .796-.644 1.44-1.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
