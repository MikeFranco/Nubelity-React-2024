import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import MainLayout from './layouts/mainLayout/MainLayout';
import React, { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';

const Login = lazy(() => import('./pages/login/Login'));
const Testing = lazy(() => import('./pages/testing/Testing'));
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route path='settings'>
            <Route
              index
              element={
                <MainLayout>
                  <Settings />
                </MainLayout>
              }
            />
            <Route
              path='profile'
              element={
                <MainLayout>
                  <Profile />
                </MainLayout>
              }
            />
          </Route>
          {/* <Route
            path='settings/'
            element={
              <MainLayout>
                <Settings />
              </MainLayout>
            }
          />
          <Route
            path='settings/profile'
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          /> */}
          {/*           <Route
        path='address'
        element={<Login />}
      />
      <Route
        path='orders'
        element={<Login />}
      />
      <Route
        path='config'
        element={<Login />}
      /> */}

          {/* <Route
            path='/register'
            element={<Login />}
          /> */}
          <Route
            path='/'
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path='/testing'
            element={<Testing />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
