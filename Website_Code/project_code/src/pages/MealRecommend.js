import { useEffect, useState, useContext} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import '../MealsStyle.css';
import '../style.css';

export default function MealRecommend() {
  const { id } = useParams();
  const [singleuser, setSingleUser] = useState();
  const [notFound, setNotFound] = useState();
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const navigate = useNavigate(); 
  useEffect(() => {
      console.log('Fetching meal recommend data...');
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
  }, [id]);
    function RefreshMeal() {
    }
    // function showDropdown(event) {
    //   event.preventDefault(); // Prevent the default right-click behavior
    //   var dropdownMenu = document.getElementById("Instructions");
    //   dropdownMenu.style.display = "block";
    //   dropdownMenu.style.left = event.clientX + "px"; // Position the dropdown horizontally at the click position
    //   dropdownMenu.style.top = event.clientY + "px"; // Position the dropdown vertically at the click position
    // }
    
    // // Function to hide the dropdown menu
    // function hideDropdown() {
    //     var dropdownMenu = document.getElementById("Instructions");
    //     if(dropdownMenu != null){
    //       dropdownMenu.style.display = "none";
    //     }
    // }
    return (
        <>{singleuser ? (
          <div className="MealRec">
          <div className='refresh-bttn'><a type="button" href="">New Meals</a></div>
          {/* <input type="button" value="New Meals" id="Refresh" onclick={RefreshMeal}></input> */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 id="MealName2">{singleuser.get_recommend[0].Name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>Nutritional Data</h3>
                <p>Calories: <span className="Calories">{singleuser.get_recommend[0].Calories}</span></p>
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[0].FatContent}</span></p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[0].CarbohydrateContent}</span></p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[0].SugarContent}</span></p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[0].SodiumContent}</span></p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[0].ProteinContent}</span></p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne"></input>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 id="MealName2">{singleuser.get_recommend[1].Name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>Nutritional Data</h3>
                <p>Calories: <span className="Calories">{singleuser.get_recommend[1].Calories}</span></p>
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[1].FatContent}</span></p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[1].CarbohydrateContent}</span></p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[1].SugarContent}</span></p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[1].SodiumContent}</span></p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[1].ProteinContent}</span></p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne"></input>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 id="MealName2">{singleuser.get_recommend[2].Name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>Nutritional Data</h3>
                <p>Calories: <span className="Calories">{singleuser.get_recommend[2].Calories}</span></p>
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[2].FatContent}</span></p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[2].CarbohydrateContent}</span></p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[2].SugarContent}</span></p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[2].SodiumContent}</span></p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[2].ProteinContent}</span></p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne"></input>
              </div>
            </div>
          </div>

          {/* <div className="dropdown-menu" id="Instructions">
            <p>{singleuser.get_recommend[0].RecipeInstructions}</p>
          </div> */}
          </div>
        ):null}
        </>
    );
};

