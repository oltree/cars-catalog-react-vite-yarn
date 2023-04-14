import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/screens/home/Home';
import NotFound from '../components/screens/notFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
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
