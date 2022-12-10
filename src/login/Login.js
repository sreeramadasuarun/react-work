import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../login/auth'
import "./LoginCss.css";

function App() {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [errorMessages, setErrorMessages] = useState({});

    // User Login
    const database = [
        {
            username: "arun",
            password: "165"
        },
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (e) => {

        e.preventDefault();


        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {

            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {

                login({ uname, pass });
                navigate("/")
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }

        console.log(handleSubmit);

    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    return (
        <div className="form">

            <form onSubmit={handleSubmit} >
                <div className="input-container">
                    <label>Username </label>

                    <input
                        type="text"
                        name="uname"
                        required
                    />
                    {renderErrorMessage("uname")}

                </div>

                <div className="input-container">
                    <label>Password </label>

                    <input
                        type="password"
                        name="pass"
                        required
                    />
                    {renderErrorMessage("pass")}

                </div>

                <div className="button-container">
                    <input
                        type="submit" />

                </div>

            </form>

        </div>
    );
}

export default App;