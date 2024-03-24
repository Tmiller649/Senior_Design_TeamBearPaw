import React from 'react'
import './MealsStyle.css';
function MealRec() {
    return (
      <div className="MealRec">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="IMG1" src="image1.jpg" alt="Image 1" />
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
            </div>
          </div>
        </div>
  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="IMG2" src="image2.jpg" alt="Image 2" />
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
            </div>
          </div>
        </div>
  
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="IMG3" src="image3.jpg" alt="Image 3" />
            </div>
            <div className="flip-card-back">
              <h3>Nutritional Data</h3>
              <p>Calories: <span className="Calories">800</span></p>
              <p>Calories-From-Fat: <span className="Calories-From-Fat">400</span></p>
              <p>Carbohydrates: <span className="Carbs">200</span></p>
              <p>Sugars: <span className="Sugars">100</span></p>
              <p>Sodium: <span className="Sodium">100</span></p>
              <p>Protein: <span className="Protein">20</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MealRec;