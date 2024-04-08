import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NutritionForm from './NutritionForm';
import MealRec from './MealRec';
import NotFound from './components/404';
import SingleUser from './pages/SingleUser';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import UserNutrition from './pages/UserNutrition';
import MealRecommend from './pages/MealRecommend';

export const LoginContext = createContext();

export default function App() {
  useEffect(() => {
    function refreshTokens() {
      if(localStorage.refresh) {
        const url = 'http://localhost:8000/api/token/refresh/';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
        .then((response) => {
          return response.json();  
        })
        .then((data) => {
          localStorage.access = data.access;
          localStorage.refresh = data.refresh;
          setLoggedIn(true);
        });
      }
    }
    refreshTokens();
    setInterval(refreshTokens, 30000)
  }, []);
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
        <Route path="/:id" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/meals" element={<MealRec/>} /> */}
        <Route path="/nutrition-form" element={<NutritionForm/>} />
        <Route path="/account/:id" element={<SingleUser/>} />

        <Route path="/:id/Nutrition" element={<UserNutrition/>} />
        <Route path="/:id/MealRec" element={<MealRecommend/>} />

        <Route path="/404" element={<NotFound/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  </LoginContext.Provider>
)
}