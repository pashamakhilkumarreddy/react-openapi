import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { history } from 'routes/history';

/**
 * `Layout` component represents the overall structure of the application.
 * It includes the `Header`, `Footer`, and a main content area where routed components are displayed.
 * 
 * The `Layout` component also integrates with the `history` object to provide navigation and location capabilities.
 * 
 * @component
 * 
 * @example
 * return (
 *   <Layout />
 * );
 */
const Layout = () => {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <>
      <Header />
      <main className="bg-white grow h-screen w-full overflow-y-scroll px-8 py-7">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
