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
    return (
        <>{singleuser ? (
            <div className="DailyProg">
            <h2> Daily Progress Tracker</h2>
            <div className="ProgressBar">
            <label htmlFor="Calories">Calories</label>
            <progress id="CaloriesProgress" value="1400" name="Calories" max={singleuser.get_nutrition.Calories[1]}></progress>
            <p><span className="currCount">1400</span>/<span className="totCount">{singleuser.get_nutrition.Calories[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Calories-From-Fat">Calories-From-Fat</label>
            <progress id="FatProgress" value="20" name="Calories-From-Fat" max={singleuser.get_nutrition.FatContent[1]}></progress>
            <p><span className="currCount">20</span>/<span className="totCount">{singleuser.get_nutrition.FatContent[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Carbs">Carbohydrates</label>
            <progress id="CarbProgress" value="255" name="Carbs" max={singleuser.get_nutrition.CarbohydrateContent[1]}></progress>
            <p><span className="currCount">255</span>/<span className="totCount">{singleuser.get_nutrition.CarbohydrateContent[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Sugars">Sugars</label>
            <progress id="SugarProgress" value="100" name="Sugars" max={singleuser.get_nutrition.SugarContent[1]}></progress>
            <p><span className="currCount">100</span>/<span className="totCount">{singleuser.get_nutrition.SugarContent[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Sodium">Sodium</label>
            <progress id="SodiumProgress" value="1200" name="Sugars" max={singleuser.get_nutrition.SodiumContent[1]}></progress>
            <p><span className="currCount">1200</span>/<span className="totCount">{singleuser.get_nutrition.SodiumContent[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Fiber">Fiber</label>
            <progress id="FiberProgress" value="14" name="Fiber" max={singleuser.get_nutrition.FiberContent[1]}></progress>
            <p><span className="currCount">14</span>/<span className="totCount">{singleuser.get_nutrition.FiberContent[1]}</span></p>
            </div>
            <div className="ProgressBar">
            <label htmlFor="Protein">Protein</label>
            <progress id="ProteinProgress" value="100" name="Sugars" max={singleuser.get_nutrition.ProteinContent[1]}></progress>
            <p><span className="currCount">100</span>/<span className="totCount">{singleuser.get_nutrition.ProteinContent[1]}</span></p>
            </div>
            </div>
        ):null}
        </>
    );
};
