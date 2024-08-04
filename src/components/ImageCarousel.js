import React, { useState } from 'react';
import '../css/carousel.css';
import backwards from '../photos/carouselphotos/forwards.png';
import forwards from '../photos/carouselphotos/backwards.png';


const ImageCarousel = ({ images, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={`carousel-image ${className}`} />
            <div className="navigation-buttons">
                <button className='button-sizing' onClick={goToPreviousImage}>
                    <img className='arrows' src={backwards} alt='backwards'/>
                </button>
                <button className='button-sizing' onClick={goToNextImage}>
                    <img className='arrows' src={forwards} alt='forwards'/>
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;