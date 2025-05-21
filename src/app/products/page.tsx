"use client";

import {useState} from 'react';
import AcupuncturePage from './acupuncture';
import './products.css'

function Product() {
    const [currentProduct, setCurrentProduct] = useState("Acupuncture Needles");
    return (
        <div>
            <h1>Products</h1>
            <p>Welcome to the Products page!</p>
            <button className = "product-button" onClick={() => setCurrentProduct("Acupuncture Needles")}>Acupuncture Needles</button>
            <button className = "product-button" onClick={() => setCurrentProduct("ElectroAcupuncture")}>ElectroAcupuncture</button>
            <h2>Current Product: {currentProduct}</h2>
            {currentProduct === "Acupuncture Needles" && <AcupuncturePage />}
            {currentProduct === "ElectroAcupuncture" && <p>ElectroAcupuncture content goes here.</p>}
        </div>
    );
}

export default Product;