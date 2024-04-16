import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});

    function handleChange(evt) {
        const { name, value } = evt.target;
        setUserData(data => ({ ...data, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let url = "http://localhost:3000/users";
        let method = "post";
        let data = userData;
        const headers = { "Content-Type": "application/json" };

        try {
            let resp = (await axios({ url, method, data, headers })).data;

        } catch(error) {
            console.error("Error in handleSubmit:", error);
        }
        history.push("/");

    }

    return (
        <div className="registration">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h1 className="mb-3">Yodlr Registration Portal</h1>
          <div className="card">
            <div className="card-body">
              <form id="regForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name: </label>
                  <input type="text"
                         id="firstName"
                         name="firstName"
                         onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name: </label>
                  <input type="text"
                         id="lastName"
                         name="lastName"
                         onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" 
                         name="email" 
                         id="email"
                         onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

};
export default RegisterForm;