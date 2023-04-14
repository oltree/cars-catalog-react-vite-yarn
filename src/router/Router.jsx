import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/screens/home/Home';
import NotFound from '../components/screens/notFound/NotFound';
import CarDetail from '../components/screens/car-detail/CarDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />
        <Route
          element={<CarDetail />}
          path="/car/:id"
        />
        <Route
          element={<NotFound />}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
