import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/screens/home/Home';
import NotFound from '../components/screens/notFound/NotFound';
import CarDetail from '../components/screens/car-detail/CarDetail';

import { IRoute } from '../types/route.interface';

const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/car/:id',
    element: <CarDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
