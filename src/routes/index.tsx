import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DisplayAllCards from '../pages/Cards';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';
import CreateACard from '../pages/createNewCard';
import UpdateCard from '../pages/Update';

const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/displayallcards' element={<DisplayAllCards />} />
          <Route path='/createNewCard' element={<CreateACard />} />
          <Route path='/updateCard' element={<UpdateCard />} />
        </Routes>
      </Router>
    </>
  );
};

export default AllRoutes;
