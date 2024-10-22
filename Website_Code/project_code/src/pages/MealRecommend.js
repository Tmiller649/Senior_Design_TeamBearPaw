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
      const url = 'http://localhost:8000/api/customusers/' + id + '/';
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
  function mealPicked(e,slot) {
    e.preventDefault();

    const url = 'http://localhost:8000/api/customusers/' + id + '/';
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access')
        },
        body: JSON.stringify({
            daily_cal: (singleuser.daily_cal + singleuser.get_recommend[slot].Calories),
            daily_cff: (singleuser.daily_cff + singleuser.get_recommend[slot].FatContent),
            daily_carb: (singleuser.daily_carb + singleuser.get_recommend[slot].CarbohydrateContent),
            daily_sug: (singleuser.daily_sug + singleuser.get_recommend[slot].SugarContent),
            daily_sod: (singleuser.daily_sod + singleuser.get_recommend[slot].SodiumContent),
            daily_pro: (singleuser.daily_pro + singleuser.get_recommend[slot].ProteinContent),
        }),
    })
        .then((response) => {
            if(response.status === 400){
                window.location.reload();
            }
            return response.json();
        })
        .then((data) => {
            navigate('/' + id);
        });
  }
    return (
        <>{singleuser ? (
          <div className="MealRec">
          <div>
          <button type="button" id="GoBack" onClick={(e) => {
                  navigate(-1);
          }}>Back</button>
            <button type = "button" id="Refresh" className='refresh-bttn' onClick={(e) => {
                  navigate(0);
            }}>New Meals</button>
          </div>
          {/* <input type="button" value="New Meals" id="Refresh" onclick={RefreshMeal}></input> */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 id="MealName2">{singleuser.get_recommend[0].Name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>Nutritional Data</h3>
                <p>Calories: <span className="Calories">{singleuser.get_recommend[0].Calories}</span></p>
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[0].FatContent}</span>g</p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[0].CarbohydrateContent}</span>g</p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[0].SugarContent}</span>g</p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[0].SodiumContent}</span>mg</p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[0].ProteinContent}</span>g</p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne" onClick={(e) => mealPicked(e,0)
                }></input>
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
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[1].FatContent}</span>g</p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[1].CarbohydrateContent}</span>g</p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[1].SugarContent}</span>g</p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[1].SodiumContent}</span>mg</p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[1].ProteinContent}</span>g</p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne" onClick={(e) => mealPicked(e,1)
                }></input>
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
                <p>Calories-From-Fat: <span className="Calories-From-Fat">{singleuser.get_recommend[2].FatContent}</span>g</p>
                <p>Carbohydrates: <span className="Carbs">{singleuser.get_recommend[2].CarbohydrateContent}</span>g</p>
                <p>Sugars: <span className="Sugars">{singleuser.get_recommend[2].SugarContent}</span>g</p>
                <p>Sodium: <span className="Sodium">{singleuser.get_recommend[2].SodiumContent}</span>mg</p>
                <p>Protein: <span className="Protein">{singleuser.get_recommend[2].ProteinContent}</span>g</p>
                <a href="">Instructions</a>
                <input type="button" value="Pick Meal" id="PickMealOne" onClick={(e) => mealPicked(e,2)
                }></input>
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
