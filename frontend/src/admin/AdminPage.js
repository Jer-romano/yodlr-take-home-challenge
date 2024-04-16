import React, { useEffect, useState } from 'react';
import UserCard from '../users/UserCard';
import axios from 'axios';

const AdminPage = () => {

    const [users, setUsers] = useState();
    useEffect(() => {
        async function fetchUsers() {
            let url = "http://localhost:3000/users";
            let method = "get";
            const headers = { "Content-Type": "application/json" };
            try {
                let resp = (await axios({ url, method, headers })).data;
                setUsers(resp);
    
            } catch(error) {
                console.error("Error in fetchUsers:", error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <>
        <h1>Users</h1>
        <div className='justify-content-center col-md-8 offset-md-2'>
        {users && users.map(u => 
                        <UserCard 
                        key={u.id}
                         id={u.id}
                         firstName={u.firstName}
                         lastName={u.lastName}
                         email={u.email}
                         state={u.state}/>)}
        </div>
        </>
    );

};
export default AdminPage;