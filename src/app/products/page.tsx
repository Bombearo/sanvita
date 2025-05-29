"use client";

import AcupuncturePage from './acupuncture';
import './products.css'
import Image from 'next/image';

const images = [
    "/images/image3.png",
    "/images/image4.svg",
    "/images/image5.png",
]

const brandItems = () => <div className="brand-showcase">
    {images.map((image, index) => (
        <Image key={index} src={image} alt={`Brand Image ${index + 1}`} className="brand-image" width={200} height={200} />
    ))}
</div>

function Product() {
    return (
        <div>
            <h1>Products</h1>
            <p>Welcome to the Products page!</p>
            <div className="brand-section">
                <div className="brand-items">
                    {brandItems()}
                </div>   
            </div>  
            {<AcupuncturePage />}
        </div>
    );
}

export default Product;