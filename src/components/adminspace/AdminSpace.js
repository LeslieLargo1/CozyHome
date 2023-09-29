import React, { useState } from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import "./styles/style.css"

const Adminspace = () => {
    const [properties, setProperties] = useState([]);
    const [newProperty, setNewProperty] = useState({ name: "", location: "", price: "", description: "", number_of_rooms: "" });


    const [selectedFile, setSelectedFile] = useState("");

    const handleFileInputChange = (e) => {
        console.log(e.target.files[0]);
        const fileName = e.target.files[0].name;
        setSelectedFile(fileName);
        // send e.target.files[0] to the backend 
    };

    const addProperty = () => {
        if (newProperty.name !== "" && newProperty.description !== "") {
            setProperties([...properties, newProperty]);
            setNewProperty({ name: "", description: "" });
        }
    };

    return (
        <div className="all-properties-container">
            <h1 className="admin-title">Admin Property List</h1>
            <input
                className='new-property'
                type="text"
                placeholder="Name"
                value={newProperty.name ?? ''}
                onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
            />
            <input
                className='new-property'
                type="text"
                placeholder="Location"
                value={newProperty.location ?? ''}
                onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
            />
            <input
                className='new-property'
                type="number"
                placeholder="Price"
                value={newProperty.price ?? 0}
                onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
            />
            <input
                className='new-property'

                type="text"
                placeholder="Description"
                value={newProperty.description ?? ''}
                onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
            />
            <input
                className='new-property'

                type="text"
                placeholder="#Rooms"
                value={newProperty.number_of_rooms ?? 0}
                onChange={(e) => setNewProperty({ ...newProperty, number_of_rooms: e.target.value })}
            />
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileInputChange}
            />

            <button className="add-property" onClick={addProperty}>
                Add Property
            </button>
            <div className="property-list">
                {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} selectedFile={selectedFile} />
                ))}
            </div>
        </div>
    );
};
export default Adminspace

