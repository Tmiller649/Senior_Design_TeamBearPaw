import React from 'react'
import './MealsStyle.css';
function MealRec() {
    return (
      <div className="MealRec">
       <input type="button" value="New Meals" id="Refresh"></input>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 id="MealName2">Meal Name 2</h2>
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
              <a href="">Instructions</a>
              <input type="button" value="Pick Meal" id="PickMealOne"></input>
            </div>
          </div>
        </div>
  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 id="MealName2">Meal Name 2</h2>
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
              <a href="">Instructions</a>
              <input type="button" value="Pick Meal" id="PickMealTwo"></input>
            </div>
          </div>
        </div>
  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 id="MealName2">Meal Name 2</h2>
              <a href="">Instructions</a>
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
              <a href="">Instructions</a>
              <input type="button" value="Pick Meal" id="PickMealThree"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MealRec;