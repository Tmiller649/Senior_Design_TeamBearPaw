import { useRef } from 'react';
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleUser() {
    const { id } = useParams();
    const [singleuser, setSingleUser] = useState();
    useEffect(() => {
        console.log('Fetching single user data...');
        const url = 'http://localhost:8000/api/customusers/' + id;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setSingleUser(data);
        });
    }, [id]);

    return (
        <>
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
        </>
    );
};
