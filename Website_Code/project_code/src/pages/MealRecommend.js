import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import '../MealsStyle.css';
export default function MealRecommend() {
    const { id } = useParams();
    const [singleuser, setSingleUser] = useState();
    useEffect(() => {
        console.log('Fetching meal recommend data...');
        const url = 'http://localhost:8000/api/customusers/' + id;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setSingleUser(data);
        });
    }, [id]);
    return (
        <>{singleuser ? (
          <div className="MealRec">
          <input type="button" value="New Meals" id="Refresh"></input>
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
          </div>
        ):null}
        </>
    );
};

