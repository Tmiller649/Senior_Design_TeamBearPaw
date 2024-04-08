import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

export default function SingleUser() {
    const { id } = useParams();
    const [singleuser, setSingleUser] = useState();
    const [notFound, setNotFound] = useState();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const navigate = useNavigate(); 
    useEffect(() => {
        console.log('Fetching single user data...');
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
        <>
            {notFound ? <p>The user with id {id} does not exist</p> : null}
            <h1>User Information</h1>
                {singleuser
                    ? (<div>
                        <h2>Email: {singleuser.email}</h2>
                        <h2>Age: {singleuser.age}</h2>
                        <h2>Gender: {singleuser.gender}</h2>
                        <h2>Height: {singleuser.height} in</h2>
                        <h2>Weight: {singleuser.weight} lbs</h2>
                        <h2>Physical Activity Level: {
                            {
                                'S':'Sedentary',
                                'LA':'Low Active',
                                'A':'Active',
                                'VA':'Very Active',
                            }[singleuser.physical_activity_level] || 'N/A'
                        }</h2>
                        <h2>Track Fat: {
                            {
                                true : 'Yes'
                            }[singleuser.track_fat] || 'No'
                        }</h2>
                        <h2>Track Salt: {
                            {
                                true : 'Yes'
                            }[singleuser.track_salt] || 'No'
                        }</h2>
                        <h2>Track Sugar: {
                            {
                                true : 'Yes'
                            }[singleuser.track_sugar] || 'No'
                        }</h2>
                        <h2>Weight Goal: {
                            {
                                'L':'Lose',
                                'S':'Stay',
                                'G':'Gain',
                            }[singleuser.weight_goal] || 'N/A'
                        }</h2>
                    </div> 
                    ): null}
                    <button onClick={(e) => {
                        const url = 'http://localhost:8000/api/customusers/' + id;
                        fetch(url, { method: 'DELETE' })
                        .then((response) => {
                            if(!response.ok){
                                throw new Error('Something went wrong');
                            }
                            navigate('/');
                        })
                        .catch((e) => {
                            console.log(e)
                        });
                        console.log('Deleting...')
                    }}>Delete User</button>
                    <br />
                    <br />
                    <br />
                    <Link to="/">Go back</Link>
        </>
    );
};