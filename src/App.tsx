import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route path='settings'>
          <Route
            index /* Panel general de configura */
            element={<Settings />}
          />
          <Route
            path='profile'
            element={<Profile />}
          />
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
        </Route>

        <Route
          path='/register'
          element={<Login />}
        />
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
