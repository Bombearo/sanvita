'use client';

import { useState, useEffect } from 'react';
import './carousel.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CarouselProps {
    items: string[];
}

function Carousel({items}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = items.length - 1;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Iterate through carousel items every 3 seconds
    useEffect(() => {
        if (items.length > 1) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [items.length]);

    return (
        <div className="carousel">
            <div className="carousel-track">
                {items.map((item, index) => (
                    <div key={index} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                        {item.endsWith('.jpg') || item.endsWith('.png') || item.endsWith('.jpeg') ? (
                            <Image src={item} alt={`Carousel item ${index}`} className="section-image" width={500} height={500}/>
                        ) : item.endsWith('.mp4') ? (
                            <video autoPlay controls muted className="section-video">
                                <source src={item} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : null}
                    </div>
                ))}
                
            </div>
            {items.length > 1 && <div className="carousel-controls">
                <button onClick={prevSlide} className="carousel-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
                <button onClick={nextSlide} className="carousel-button">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>}
        </div>
    );
}

export default Carousel;