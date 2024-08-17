import axios from "axios";
import "./css/GetdataCss.css"
import React, { useState } from "react";

function GetData() {
    const [usersData, setUsersData] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("/allusers");
            console.log("Fetched data:", response.data);
            setUsersData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setTimeout(fetchData, 2000);
    }

    return (
        <div>
            <ul>
                {usersData.map((user) => (
                    
            <div class="container">
                <div class="sub-part1" >{user.userid}</div>
                <div class="sub-part2">{user.name}</div>
            </div>

                ))}
            </ul>
            <button onClick={fetchData}>Fetch Data</button>
        </div>
    );
}

export default GetData;
