import React from "react";

export default function Allparcel({parcel_id, status, sender }) {
    return (
        <div className="All-Parcel">
            <table className="tab">
                <tbody>
                    <tr className="rows">         
                        <td >{parcel_id}</td>
                        <td>{sender}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}