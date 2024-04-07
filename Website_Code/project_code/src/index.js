import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NutritionForm from './NutritionForm';
import MealRec from './MealRec';
import Accounts from './pages/Accounts'
import NotFound from './components/Header/404';
import SingleUser from './pages/SingleUser';
// Chau's pages
import UserNutrition from './pages/UserNutrition';
import MealRecommend from './pages/MealRecommend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/meals" element={<MealRec/>} />
      <Route path="/nutrition-form" element={<NutritionForm/>} />
      <Route path="/accounts" element={<Accounts/>} />
      <Route path="/accounts/:id" element={<SingleUser/>} />
      <Route path="/404" element={<NotFound/>} />

      <Route path="/accounts/:id/Nutrition" element={<UserNutrition/>} />
      <Route path="/accounts/:id/MealRec" element={<MealRecommend/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
