import React from 'react'
import "./styles/propertycard.css"



function PropertyCard({ property, selectedFile }) {
    return (

        <div className="property-card">

            <h2 className='property-name'>{property.name}</h2>
            <p className='property-location'>{property.location}</p>
            <p className='property-price'>{property.price}</p>
            <p className='property-description'>{property.description}</p>
            <p className='property-rooms'>{property.number_of_rooms}</p>
        </div>

    )
}

export default PropertyCard
