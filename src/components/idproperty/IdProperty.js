import React, { useEffect } from 'react'
import "./styles/style.css"

const Idproperty = () => {


    useEffect(() => {

        const apiUrl = "https://cozyhome.onrender.com/property/:propertyid";

        fetch(apiUrl)
            .then((response) => {
                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON data in the response
                return response.json();
            })
            .then((data) => {
                // Log the data to the console
                console.log(data);

                // You can now use the 'data' object in your code
                // For example, if you want to display it in your component, you can setState or use it in some other way.
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error('There was a problem with the fetch operation:', error);
            });







    })


    return (
        <div>Property by ID</div>
    )
}

export default Idproperty
