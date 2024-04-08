import { useState, useEffect, useContext } from 'react';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function Login() {
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [badRequest, setBadRequest] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!(localStorage.length === 0)){
            navigate(-1);
        }    
    }, );

    console.log((localStorage.length === 0));
    if (!(localStorage.length === 0)){
        navigate(
            location?.state?.previousUrl
                ? location.state.previousUrl
                : navigate(-1)
        );
    }

    function login(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/api/token/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => {
                if(response.status === 400){
                    setBadRequest(true);
                }
                return response.json();
            })
            .then((data) => {
                if(badRequest) {
                    navigate('/login');
                }
                else {
                    localStorage.setItem('access', data.access);
                    localStorage.setItem('refresh', data.refresh);
                    setLoggedIn(true);
                    navigate(
                        location?.state?.previousUrl
                            ? location.state.previousUrl
                            : ('/' + data.id)
                    );
                }
            });
    }

    return (
        <>
        <form className="m-2 w-full max-w-sm" id="customer" onSubmit={login}>
            <div className="md:flex md:items-center mb-6">
                <div>{
                    <h1>{ badRequest ? "Please enter a valid email and/or password" : "" }</h1>
                }</div>
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
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </form>
        <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                <br/>
                <a href="/signup">
                    <button>
                    Sign Up
                </button>
            </a>
        </div>
        </>
                
    );
}