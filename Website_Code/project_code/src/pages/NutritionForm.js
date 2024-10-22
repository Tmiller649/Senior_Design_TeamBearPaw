import React from 'react'
import { useEffect, useState, useContext} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import '../NutritionForm.css';

function NutritionForm() {
    const { id } = useParams();
    const [singleuser, setSingleUser] = useState();
    const [notFound, setNotFound] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const navigate = useNavigate(); 

    const [daily_cal, setDailyCal] = useState(0);
    const [daily_cff, setDailyCff] = useState(0);
    const [daily_carb, setDailyCarb] = useState(0);
    const [daily_sug, setDailySug] = useState(0);
    const [daily_sod, setDailySod] = useState(0);
    const [daily_pro, setDailyPro] = useState(0);

    useEffect(() => {
        console.log('Fetching user nutrition data...');
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

    function mealAdded(e,slot) {
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
                daily_cal: (Number(singleuser.daily_cal) + Number(daily_cal)),
                daily_cff: (Number(singleuser.daily_cff) + Number(daily_cff)),
                daily_carb: (Number(singleuser.daily_carb) + Number(daily_carb)),
                daily_sug: (Number(singleuser.daily_sug) + Number(daily_sug)),
                daily_sod: (Number(singleuser.daily_sod) + Number(daily_sod)),
                daily_pro: (Number(singleuser.daily_pro) + Number(daily_pro)),
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
        <div className='NutritionForm'>
            <h1 id="WebTitle">Meal Tracking Application</h1>
            <form id="mealForm" onSubmit={mealAdded}>
                <label className="MealInputLabel" htmlFor="Calories">Calories</label>
                <input name="Calories" className="MealInput" type="number" id="CaloriesInput" value={daily_cal} onChange={(e) => {
                    setDailyCal(e.target.value);
                }}/>
                <label className="MealInputLabel" htmlFor="TotalFat">Total Fat</label>
                <input name="TotalFat" className="MealInput" type="number" id="TotalFatInput" value={daily_cff} onChange={(e) => {
                    setDailyCff(e.target.value);
                }} />
                <label className="MealInputLabel" htmlFor="Sodium">Sodium</label>
                <input name="Sodium" className="MealInput" type="number" id="SodiumInput" value={daily_sod} onChange={(e) => {
                    setDailySod(e.target.value);
                }}/>
                <label className="MealInputLabel" htmlFor="Sugars">Sugars</label>
                <input name="Sugars" className="MealInput" type="number" id="SugarsInput" value={daily_sug} onChange={(e) => {
                    setDailySug(e.target.value);
                }}/>
                <label className="MealInputLabel" htmlFor="Carbs">Carbs</label>
                <input name="Carbs" className="MealInput" type="number" id="CarbsInput" value={daily_carb} onChange={(e) => {
                    setDailyCarb(e.target.value);
                }}/>
                <label className="MealInputLabel" htmlFor="Protein">Protein</label>
                <input name="Protein" className="MealInput" type="number" id="ProteinsInput" value={daily_pro} onChange={(e) => {
                    setDailyPro(e.target.value);
                }}/>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
            <button type="button" id="GoBack" onClick={(e) => {
                  navigate(-1);
          }}>Back</button>
        </div>
        
    );
}

export default NutritionForm;