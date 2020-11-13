import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
    //Reactive Data
    const [username, setUsername] = useState("");

    const history = useHistory();

    const getUserPage = (event) => {
        event.preventDefault();
        history.push(`/Customer/${username}`);   
    };
    
    return (
        <form className="login-form">
            <label>Enter your FullName to see your parcels  </label>
            <input className="search-bar"
                type="text"
                placeholder="Jhon Doe"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            {/* <Link to={`/customer/${username}`}>Submit</Link> */}
            <button
                className="search-button"
                type="submit"
                onClick={(event) => getUserPage(event)}
            >
                Submit</button>
        </form>
    );
}