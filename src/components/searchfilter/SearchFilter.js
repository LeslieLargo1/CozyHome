import "./styles/style.css"
import React, { useState } from 'react';



const SearchFilter = () => {
    // Initialize state for input fields
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can perform your search or other actions here
        console.log('Location:', location);
        console.log('Check-In:', checkIn);
        console.log('Check-Out:', checkOut);
        console.log('Rooms:', rooms);
    };
    // const apiUrl = `https://cozyhome.onrender.com/property/properties`;


    // Make a GET request to the API
    // fetch(apiUrl)
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then((data) => {
    //         // Handle the API response data here
    //         console.log('API Data:', data);
    //     })
    //     .catch((error) => {
    //         // Handle errors from the API request
    //         console.error('API Error:', error);
    //     });
    return (
        <div className='prop-filter-search'>
            <h1 className="title-search">Search</h1>

            <div className="search-filter-container">
                <form onSubmit={handleSubmit} className="search-filter-form">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="input-location"
                    />
                    <input
                        type="date"
                        placeholder="Check-In"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="input-date"
                    />
                    <input
                        type="date"
                        placeholder="Check-Out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="input-date"
                    />
                    <input
                        type="number"
                        placeholder="Rooms"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                        className="input-date"
                    />
                    <button type="submit" className="search-filter-button" >
                        Search
                    </button>
                </form>
            </div>


        </div>
    )
}
export default SearchFilter