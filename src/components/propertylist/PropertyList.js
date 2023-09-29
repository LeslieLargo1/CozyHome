import React, { useEffect, useState } from 'react';
import PropertyCard from '../propertyCard/PropertyCard'

const Propertylist = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        const apiUrl = "https://cozyhomestays.onrender.com/property/properties";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setProperties(data.properties))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="list">
            <h1>Property Listings</h1>
            <div className="property-list">
                {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Propertylist;
