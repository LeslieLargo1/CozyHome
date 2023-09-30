import React from 'react'
import "./styles/propertycard.css"



function PropertyCard({ property }) {
    return (

        <div className="property-card">
            <img className='property-card-image' alt=" house" src='https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'></img>
            <h2 className='property-name'>{property.name}</h2>
            <p className='property-location'>{property.location}</p>
            <p className='property-price'>{property.price}</p>
            <p className='property-rooms'>{property.number_of_rooms}</p>
            <p className='property-description'>{property.description}</p>


        </div>

    )
}

export default PropertyCard
