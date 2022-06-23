import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

import Home from '../pages/Home';
import RecipeReviewCard from '../pages/Cards';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Signup';

const AllRoutes = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<RecipeReviewCard />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoutes;
