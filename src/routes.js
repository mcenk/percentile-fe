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
import SaveChild from './pages/SaveChild';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/anasayfa',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/anasayfa/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'cocuklar', element: <UserPage /> },
        { path: 'product', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> }
     
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
      path: 'savechild',
      element: <SaveChild />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/anasayfa/app" />, index: true },
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
