import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { AsideMenu, Header } from './components';
import { Layout } from '@neogrid/design-system';
import 'antd/dist/antd.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout headerIsFixed>
        <AsideMenu />

        <Layout>
          <Header />
          <AppRoutes />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
