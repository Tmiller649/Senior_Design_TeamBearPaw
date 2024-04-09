import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import './NutritionForm.css';

function NutritionForm() {
    const navigate = useNavigate(); 
    return (
        <div className='NutritionForm'>
            <h1 id="WebTitle">Meal Tracking Application</h1>
            <form id="mealForm">
                <label className="MealInputLabel" htmlFor="Calories">Calories</label>
                <input name="Calories" className="MealInput" type="text" id="CaloriesInput" />
                <label className="MealInputLabel" htmlFor="TotalFat">Total Fat</label>
                <input name="TotalFat" className="MealInput" type="text" id="TotalFatInput" />
                <label className="MealInputLabel" htmlFor="Sodium">Sodium</label>
                <input name="Sodium" className="MealInput" type="text" id="SodiumInput" />
                <label className="MealInputLabel" htmlFor="Sugars">Sugars</label>
                <input name="Sugars" className="MealInput" type="text" id="SugarsInput" />
                <label className="MealInputLabel" htmlFor="Carbs">Carbs</label>
                <input name="Carbs" className="MealInput" type="text" id="CarbsInput" />
                <label className="MealInputLabel" htmlFor="Protein">Protein</label>
                <input name="Protein" className="MealInput" type="text" id="ProteinsInput" />
                <input type="button" value="Submit" />
            </form>
            <button type="button" id="GoBack" onClick={(e) => {
                  navigate(-1);
          }}>Back</button>
        </div>
        
    );
}

export default NutritionForm;