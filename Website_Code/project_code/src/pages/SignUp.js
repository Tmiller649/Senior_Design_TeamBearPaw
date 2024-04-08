import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function Login() {
    const [loggedIn,setLoggedIn] = useContext(LoginContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [weight, setWeight] = useState("0");
    const [height, setHeight] = useState("0");
    const [age, setAge] = useState("0");
    const [gender, setGender] = useState("P");
    const [pal, setPal] = useState("S");
    const [trackFat, setTrackFat] = useState("true");
    const [trackSalt, setTrackSalt] = useState("true");
    const [trackSugar, setTrackSugar] = useState("true");
    const [weightGoal, setWeightGoal] = useState("L");


    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
            localStorage.clear();
            setLoggedIn(false);
    }, [])

    function signup(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/api/signup/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                age: age,
                email: email,
                gender: gender,
                height: height,
                password: password,
                physical_activity_level: pal,
                track_fat: trackFat,
                track_salt: trackSalt,
                track_sugar: trackSugar,
                weight: weight,
                weight_goal: weightGoal,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                navigate(
                    location?.state?.previousUrl
                        ? location.state.previousUrl
                        : '/login'
                );
            });
    }

    return (
        <>
        <form className="m-2 w-full max-w-sm" id="customer" onSubmit={signup}>
            <h1>Sign Up Form</h1>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="email">Email</label>
                </div>
                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="password">Password</label>
                </div>

                <div className="md:w-3/4">
                    <input
                        id="password"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
            </div>
            
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="age">Age</label>
                </div>
                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="gender">Gender</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="gender"
                        type="text"
                        value={gender}
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    >
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="N">Non-Binary</option>
                        <option value="P">Prefer not to choose</option>
                    </select>
                </div>
            </div>


            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="weight">Weight(lbs)</label>
                </div>
                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => {
                            setWeight(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="height">Height(in)</label>
                </div>
                <div className="md:w-3/4">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="pal">Physical Activity Level</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="pal"
                        type="text"
                        value={pal}
                        onChange={(e) => {
                            setPal(e.target.value);
                        }}
                    >
                        <option value="S">Sedentary</option>
                        <option value="LA">Low Active</option>
                        <option value="A">Active</option>
                        <option value="VA">Very Active</option>
                    </select>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="trackfat">Track Fat</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="trackfat"
                        type="boolean"
                        value={trackFat}
                        onChange={(e) => {
                            setTrackFat(e.target.value);
                        }}
                    >
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="tracksalt">Track Salt</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="tracksalt"
                        type="boolean"
                        value={trackSalt}
                        onChange={(e) => {
                            setTrackSalt(e.target.value);
                        }}
                    >
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="tracksugar">Track Sugar</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="tracksugar"
                        type="boolean"
                        value={trackSugar}
                        onChange={(e) => {
                            setTrackSugar(e.target.value);
                        }}
                    >
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/4">
                    <label for="weightgoal">Weight Goal</label>
                </div>
                <div className="md:w-3/4">
                    <select
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="weightgoal"
                        type="text"
                        value={weightGoal}
                        onChange={(e) => {
                            setWeightGoal(e.target.value);
                        }}
                    >
                        <option value="L">Lose</option>
                        <option value="S">Stay</option>
                        <option value="G">Gain</option>
                    </select>
                </div>
            </div>

            <br/>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
            </button>
        </form>
        <div>
            <br/>
                <a href="/login">
                    <button>
                    Login
                </button>
            </a>
        </div>
        </>
    );
}