import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout/Layout.tsx';
import ErrorPage from 'components/Errors';
import { lazy } from 'react';
import withSuspense from 'hoc/WithSuspense'; // Import the HOC

const Home = withSuspense(lazy(() => import('pages/Home')));
const Images = withSuspense(lazy(() => import('pages/Images')));

const PageNotFound = withSuspense(lazy(() => import('pages/PageNotFound')));

export const PrimaryRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/images',
        element: <Images />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);
