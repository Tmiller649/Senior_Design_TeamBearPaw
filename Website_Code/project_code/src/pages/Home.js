import React, { useEffect, useContext, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom';
import '../style.css';
import Calendar from '../script';
import Header from '../components/Header/Header';
import { LoginContext } from '../App';
import UserNutrition from './UserNutrition';

export default function Home() {
const { id } = useParams();
const [singleuser, setSingleUser] = useState();
const [loggedIn, setLoggedIn] = useContext(LoginContext);
const [notFound, setNotFound] = useState();
const navigate = useNavigate(); 

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
    {/* <div className="Account">
      <a href="http://127.0.0.1:8000/">
        <button style={{height:"70px", width:"200px"}}>
          Account Info
        </button>
      </a>
    </div> */}
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
    {/* <div className="DailyProg">
      <h2> Daily Progress Tracker</h2>
      <div className="ProgressBar">
        <label htmlFor="Calories">Calories</label>
        <progress id="CaloriesProgress" value="3" name="Calories" max="100"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Calories-From-Fat">Calories-From-Fat</label>
        <progress id="FatProgress" value="20" name="Calories-From-Fat" max="25"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Carbs">Carbohydrates</label>
        <progress id="CarbProgress" value="20" name="Carbs" max="25"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Sugars">Sugars</label>
        <progress id="SugarProgress" value="100" name="Sugars" max="1000"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Sodium">Sodium</label>
        <progress id="SodiumProgress" value="100" name="Sugars" max="1000"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Fiber">Fiber</label>
        <progress id="FiberProgress" value="100" name="Fiber" max="1000"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
      <div className="ProgressBar">
        <label htmlFor="Protein">Protein</label>
        <progress id="ProteinProgress" value="100" name="Sugars" max="1000"></progress>
        <p><span className="currCount">0</span>/<span className="totCount">1000</span></p>
      </div>
    </div> */}
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