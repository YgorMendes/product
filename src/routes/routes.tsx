import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
const Details = React.lazy(() => import('../pages/details/details'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/details"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Details />
          </Suspense>
        }
      />
    </Routes>
  );
};
