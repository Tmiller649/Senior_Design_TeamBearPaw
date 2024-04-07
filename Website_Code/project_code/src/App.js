import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NutritionForm from './NutritionForm';
import MealRec from './MealRec';
import NotFound from './components/404';
import SingleUser from './pages/SingleUser';
import Login from './pages/Login'

export const LoginContext = createContext();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true:false);

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }

  return(
  <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/meals" element={<MealRec/>} />
        <Route path="/nutrition-form" element={<NutritionForm/>} />
        <Route path="/account/:id" element={<SingleUser/>} />
        <Route path="/404" element={<NotFound/>} />
      </Routes>
    </Router>
  </LoginContext.Provider>
)
}