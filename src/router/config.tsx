import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const RejemaxProPage = lazy(() => import('../pages/rejemax-pro/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/rejemax-pro',
    element: <RejemaxProPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;