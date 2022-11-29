import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import SignUp from './pages/SignUp';
import AddChild from './pages/AddChild';
import PercentileCalculator from './pages/PercentileCalculator';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/home',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'mychildren', element: <UserPage /> },
        { path: 'percentile_calculator', element: <PercentileCalculator /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'addchild', element: <AddChild/>}
 
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
