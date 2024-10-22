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
      <hr size="4" width="100%" color="black"></hr>
      <h3> Current Calorie Goal Streak</h3>
      <h4 id="CurrStreak"> 15 DAYS!! 🔥 </h4>
      <hr id="spacer" size="4" width="100%" color="black"></hr>
      <div className="ProgressBar">
        <h3 htmlFor="Weekly Progress">Weekly Progress</h3>
        <progress value="3" name="Weekly Progress" max="7">3</progress>
        <p><span className="currCount">3</span>/<span className="totCount">7 Days</span></p>
      </div>
      <hr id="spacer" size="4" width="100%" color="black"></hr>
      <div className="MonthlyProgress">
        <h3 htmlFor="Monthly Progress">Monthly Progress</h3>
        <p id="MonthlyProgress"> 80% </p>
      </div>
      <hr id="spacer" size="4" width="100%" color="black"></hr>
      <h3> Current Sub Goal Streaks</h3>
      <h4 htmlFor="SubStreak"> Sugars Goal Streak </h4>
      <h5 id="SubStreak"> 6 DAYS! 👍</h5>
      <h4 htmlFor="SubStreak"> Protein Goal Streak </h4>
      <h5 id="SubStreak"> 12 DAYS! 💪</h5>
      <h4 htmlFor="SubStreak"> Fats Goal Streak </h4>
      <h5 id="SubStreak"> 0 Days<div class="tooltip-container">
       ....
  <span class="tooltip-text">Lets get that streak going again!!</span>
</div> </h5>
    </div>
    <UserNutrition/>
    <Calendar />

      <div id="myDropdown" className="dropdown-menu">
          <Link to={`/${id}/MealRec`} id="item1">Use Meal Recommender</Link>
          <Link to={`/${id}/nutrition-form`} id="item2">Manually Log Meal</Link>
          <Link to={`/${id}/log-existing-meal`} id="item3">Log Existing Meal</Link>
      </div>    
  </div>
  );
};

// {`/${id}/MealRec`}