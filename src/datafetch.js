import React, { useEffect, useState } from 'react';


function DataFetcher() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("asdfasdfkasdfkas dfadfjald");
                const response = await fetch('/lsdjfluserId');
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            }
        };

        // Fetch data initially
        fetchData();

        // Set interval to fetch data every 5 seconds
        const intervalId = setInterval(fetchData, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data from Spring Boot</h1>
             userid is : {data.userid} <br />
             name is : {data.name}
        </div>
    );
}


//create a form tage to send the data in the form of pathparams and save the user data in mongodb and project that data 
//project all the data in the web page 
export default DataFetcher;
