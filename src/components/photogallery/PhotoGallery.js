import React, { useState, useEffect } from 'react';
import "./styles/style.css"


const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle the transition to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Automatically advance to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    },);


    const images = [
        { src: 'https://images.unsplash.com/photo-1597667554307-885851e705c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', alt: 'Image 1' },
        { src: 'https://images.unsplash.com/photo-1596510915124-38eaa5517966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Image 2' },
        { src: 'https://plus.unsplash.com/premium_photo-1663106412202-22ae183bfbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80', alt: 'Image 3' },
        { src: 'https://images.unsplash.com/photo-1609535883413-0078310a6a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', alt: 'Image 4' },
    ];


    return (
        <div className="gallery-container">
            <div
                className="gallery-slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="gallery-slide"
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;