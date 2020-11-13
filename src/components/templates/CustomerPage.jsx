//React Core
import React from "react";

//Other imports

import Search from "../molecules/Search";
import AllParcel from "../molecules/AllParcel";


export default function CustomerPage({ parameter, information }) {

    const result = information.filter((item) => { return (item.user_name) === (parameter) });
    if (result[0] === undefined) {
        return (
            <div>
                <h1>No such user. Please Check the Username entered!!</h1>
            </div>
        );
    } else
        return (
            <div className="Customer-Page">
                <h2 className="welcome-tag">Welcome {result[0].user_name}</h2>
                <Search />
                <table className="tab">
                    <thead>
                        <tr className="rows">
                            <th>Parcel_ID</th>
                            <th>Sender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                </table>
                {information.map(item => (
                    <AllParcel
                        key={item.id}
                        parcel_id={item.parcel_id}
                        sender={item.sender}
                        status={item.status} />
                ))}
            </div>
        );
}
