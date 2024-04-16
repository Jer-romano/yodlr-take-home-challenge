import React from 'react';
import "./UserCard.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserCard = ({ id, firstName, lastName, email, state }) => {

    const history = useHistory();

    async function deleteUser() {
        let url = `http://localhost:3000/users/${id}`;
        try {
            await axios.delete(url);
        } catch(error) {
            console.error("Error in deleteUser:", error);
        }
        history.push("/admin");
    }

    return (
        <div className='UserCard card'>
            <div className='card-title'>
                <h3> #{id} { firstName } { lastName }</h3>
            </div>
            <div className='card-body'>
                <p>Email: { email }</p>
                <p>State: { state }</p>
            </div>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    );

};
export default UserCard;