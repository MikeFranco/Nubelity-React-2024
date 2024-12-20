import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
