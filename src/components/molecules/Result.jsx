import React from "react";

export default function Result({ data }) {
    const { parcel_id,status, eta,  sender, location_name,notes, } = data;


    return (
        <div className="result">
            <article className="result-left">
                <p><strong>Parcel ID:</strong> 
                {parcel_id}</p>
                <p><strong>Sender:</strong>
                     {sender} </p>
                <p><strong>Status:</strong> {status}</p>
                
            </article>
            <article className="result-right">
                <p> <strong>Expected Arrival Time : </strong>
                    {eta}</p>
                <p><strong>Notes: </strong>{notes} </p>
                <p><strong>location:</strong> {location_name}</p>
            </article>
        </div>
    );
}