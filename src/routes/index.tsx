import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

import Home from '../pages/Home';
import RecipeReviewCard from '../pages/Cards';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';
import CreateNewCard from '../pages/createNewCard';
import UpdateCard from '../pages/Update';

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
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/cards' element={<RecipeReviewCard />} />
          <Route path='/createNewCard' element={<CreateNewCard />} />
          <Route path='/updateCard' element={<UpdateCard />} />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoutes;
