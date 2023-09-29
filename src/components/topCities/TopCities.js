import React from "react";
import "./styles/style.css"



const citiesData = [
    {
        city: 'Paris',
        description: 'The city of love with iconic landmarks like the Eiffel Tower.',
        imageSrc: "https://images.unsplash.com/photo-1581262208382-c2dad6c67c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80",
    },
    {
        city: 'Amsterdam',
        description: 'Quaint canals and a vibrant cultural scene await in this Dutch gem.',
        imageSrc: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80',
    },
    {
        city: 'London',
        description: 'A blend of history and modernity, home to Buckingham Palace.',
        imageSrc: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    },
    {
        city: 'Barcelona',
        description: 'Mediterranean beauty with Gaudís art and sun-soaked beaches.',
        imageSrc: 'https://images.unsplash.com/photo-1593368858664-a7fe556ab936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    },
    {
        city: 'Rome',
        description: 'Eternal city with ancient ruins, including the Colosseum and Roman Forum.',
        imageSrc: 'https://images.unsplash.com/photo-1596627118111-5b6c7890bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
        city: 'Vienna',
        description: 'Imperial grandeur and classical music culture in a historic setting.',
        imageSrc: 'https://images.unsplash.com/photo-1567597435927-80055c207c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },

];

function TopCities() {
    return (
        <div className="top-container">

            <div className="top-cities-container">

                {citiesData.map((city, index) => (
                    <div className="city-card" key={index}>
                        <img src={city.imageSrc} alt={city.city} className="city-image" />
                        <h2>{city.city}</h2>
                        <p className="topCityCards">{city.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCities;
