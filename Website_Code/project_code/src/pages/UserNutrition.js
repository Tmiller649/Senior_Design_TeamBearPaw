import { useEffect, useState, useContext} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function UserNutrition() {
    const { id } = useParams();
    const [singleuser, setSingleUser] = useState();
    const [notFound, setNotFound] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const navigate = useNavigate(); 
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

    function statReset(e,slot) {
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
                daily_cal: (0),
                daily_cff: (0),
                daily_carb: (0),
                daily_sug: (0),
                daily_sod: (0),
                daily_pro: (0),
            }),
        })
            .then((response) => {
                if(response.status === 400){
                    window.location.reload();
                }
                return response.json();
            })
            .then((data) => {
                navigate(0);
            });
    }
    return (
        <>{singleuser ? (
            <div className="DailyProg">
            <h2> Daily Progress Tracker</h2>
            <div className="ProgressBar">
            <label htmlFor="Calories">Calories</label>
            <progress id="CaloriesProgress" value={singleuser.daily_cal} name="Calories" max={singleuser.get_nutrition.Calories[1]}></progress>
            <p><span className="currCount">{singleuser.daily_cal}</span>/<span className="totCount">{singleuser.get_nutrition.Calories[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Calories-From-Fat">Calories-From-Fat</label>
            <progress id="FatProgress" value={singleuser.daily_cff} name="Calories-From-Fat" max={singleuser.get_nutrition.FatContent[1]}></progress>
            <p><span className="currCount">{singleuser.daily_cff}</span>/<span className="totCount">{singleuser.get_nutrition.FatContent[1]}</span>g</p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Carbs">Carbohydrates</label>
            <progress id="CarbProgress" value={singleuser.daily_carb} name="Carbs" max={singleuser.get_nutrition.CarbohydrateContent[1]}></progress>
            <p><span className="currCount">{singleuser.daily_carb}</span>/<span className="totCount">{singleuser.get_nutrition.CarbohydrateContent[1]}</span>g</p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Sugars">Sugars</label>
            <progress id="SugarProgress" value={singleuser.daily_sug} name="Sugars" max={singleuser.get_nutrition.SugarContent[1]}></progress>
            <p><span className="currCount">{singleuser.daily_sug}</span>/<span className="totCount">{singleuser.get_nutrition.SugarContent[1]}</span>g</p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Sodium">Sodium</label>
            <progress id="SodiumProgress" value={singleuser.daily_sod} name="Sodium" max={singleuser.get_nutrition.SodiumContent[1]}></progress>
            <p><span className="currCount">{singleuser.daily_sod}</span>/<span className="totCount">{singleuser.get_nutrition.SodiumContent[1]}</span>mg</p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Protein">Protein</label>
            <progress id="ProteinProgress" value={singleuser.daily_pro} name="Protein" max={singleuser.get_nutrition.ProteinContent[1]}></progress>
            <p><span className="currCount">{singleuser.daily_pro}</span>/<span className="totCount">{singleuser.get_nutrition.ProteinContent[1]}</span>g</p>
            <br></br>
            <button onClick={statReset}>Reset</button>
            </div>
            </div>
        ):null}
        </>
    );
};
