import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
    //Reactive Data
    const [query, setQuery] = useState("");

    const history = useHistory();

    const getTrackingPage = (event) => {
        event.preventDefault();
        history.push(`/Result/${query}`);   
    };
    
    return (
        <form className="search-form">
            <label>Enter your tracking number (Parcel_ID) to see the details</label>
            <input className="search-bar"
                type="text"
                placeholder="Tracking Number"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button
                className="search-button"
                type="submit"
                onClick={(event) => getTrackingPage(event)}
            >
                Submit</button>
        </form>
    );
}
