import React, { useEffect, useState } from 'react';
import AllPropertyCard from '../allPropertiesCard/Allpropertiescard'

const Propertylist = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        const apiUrl = "https://cozyhome.onrender.com/property/properties";



        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Log the response data
                setProperties(data.properties);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="list">
            <div className="property-list">
                {properties.map((property, index) => (
                    <AllPropertyCard key={index} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Propertylist;
