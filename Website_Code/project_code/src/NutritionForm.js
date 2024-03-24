import React from 'react'
import './MealsStyle.css';

function NutritionForm() {
    return (
        <div className='NutritionForm'>
            <h1 id="WebTitle">Meal Tracking Application</h1>
            <div className="Account">
                <h3> Account Info </h3>
            </div>
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
        </div>
    );
}

export default NutritionForm;