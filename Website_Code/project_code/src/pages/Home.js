import React, { useEffect, useContext, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom';
import '../style.css';
import Calendar from '../script';
import Header from '../components/Header/Header';
import { AccountID, LoginContext } from '../App';
import UserNutrition from './UserNutrition';

export default function Home() {
const [loggedIn, setLoggedIn] = useContext(LoginContext);

const [notFound, setNotFound] = useState();
const [singleuser, setSingleUser] = useState();

const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {    
    console.log('Fetching home user data...');
    const url = 'http://localhost:8000/api/customusers/' + id;
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        }
    })
    .then((response) => {
        if(response.status === 404){
            setNotFound(true);
        }
        if(response.status === 401){
            setLoggedIn(false);
            navigate('/login');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        setSingleUser(data);
    });
}, []);
    
function showDropdown(event) {
  event.preventDefault(); // Prevent the default right-click behavior
  var dropdownMenu = document.getElementById("myDropdown");
  dropdownMenu.style.display = "block";
  dropdownMenu.style.left = event.clientX + "px"; // Position the dropdown horizontally at the click position
  dropdownMenu.style.top = event.clientY + "px"; // Position the dropdown vertically at the click position
}

// Function to hide the dropdown menu
function hideDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    if(dropdownMenu != null){
      dropdownMenu.style.display = "none";
    }
}

// Attach event listener for right-click to show the dropdown menu
document.addEventListener("contextmenu", showDropdown);

// Attach event listeners to hide the dropdown menu on clicking outside
document.addEventListener("click", hideDropdown);
document.addEventListener("scroll", hideDropdown);
  return (
<div className="App">
<Header/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
  <h1 id="WebTitle">Meal Tracking Application</h1>
    <div className="AccountProg">
      <h2> Account Progress</h2>
      <label> Current Streak</label>
      <h3 id="CurrStreak"> 12 </h3>
      <div className="ProgressBar">
        <label htmlFor="Weekly Progress">Weekly Progress</label>
        <progress value="3" name="Weekly Progress" max="7">3</progress>
      </div>
      <div className="MonthlyProgress">
        <label htmlFor="Monthly Progress">Monthly Progress</label>
        <p id="MonthlyProgress"> 80% </p>
      </div>
    </div>
    <UserNutrition/>
    <Calendar />

      <div id="myDropdown" className="dropdown-menu">
          <Link to={`/${id}/MealRec`} id="item1">Use Meal Recommender</Link>
          <Link to="/nutrition-form" id="item2">Manually Log Meal</Link>
          <Link to="/log-existing-meal" id="item3">Log Existing Meal</Link>
      </div>    
  </div>
  );
};

// {`/${id}/MealRec`}