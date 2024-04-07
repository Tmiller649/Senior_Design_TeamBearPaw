import { useEffect, useState, } from 'react';

export default function Accounts() {
    const [users, setUsers] = useState();
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://localhost:8000/api/customusers/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUsers(data);
        });
    }, []);
    return (
        <>
            <h1>User Information</h1>
                <h2>Email: </h2>
                {users
                    ? users.map((user) => {
                        return <p>{user.email}</p>;
                }) : null}
                <h2>Age: </h2>
                {users
                    ? users.map((user) => {
                        return <p>{user.age}</p>;
                }) : null}
        </>
    );
};
