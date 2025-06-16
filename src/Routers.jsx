import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
import Blog from './pages/Blog';
import Comitee from './pages/Comitee';
import Login from './pages/Login';
import AuthContext from './Context/AuthContext';
import Account from './pages/Account';
import Terms from './pages/Terms';
import NotFound from './components/NotFound';
import Register from './pages/Register';

function Routers() {
  const { authToken } = useContext(AuthContext);
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comitee" element={<Comitee />} />
        <Route
        path="/login"
        element={
          authToken ? <Navigate to="/account" replace /> : <Login />
        }
      />
        <Route
        path="/register"
        element={
          authToken ? <Navigate to="/register" replace /> : <Register />
        }
      />
      <Route
        path="/account"
        element={
          authToken ? <Account /> : <Navigate to="/login" replace />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;
