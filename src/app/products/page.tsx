"use client";

import {useState} from 'react';

function Product() {
    const [currentProduct, setCurrentProduct] = useState("Acupuncture Needles");
    return (
        <div>
            <h1>Products</h1>
            <p>Welcome to the Products page!</p>
            <button onClick={() => setCurrentProduct("Acupuncture Needles")}>Acupuncture Needles</button>
            <button onClick={() => setCurrentProduct("ElectroAcupuncture")}>ElectroAcupuncture</button>
            <h2>Current Product: {currentProduct}</h2>
        </div>
    );
}

export default Product;