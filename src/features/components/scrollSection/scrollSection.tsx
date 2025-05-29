
"use client";
import { useState } from 'react';
import './scrollSection.css';
interface ScrollSectionItem{
    image: string;
    text: string[];
    title: string;
}

interface ScrollSectionProps {
    items: ScrollSectionItem[];
    reverse?: boolean;
}

function ScrollSection({ items }: ScrollSectionProps) {
    const [currentTitle] = useState<string>(items[0].title);
    const [currentIndex] = useState<number>(0);

    if (items.length < 3){
        throw new Error("ScrollSection requires at least 3 items");
    }





    return <div>
        <h2>Scroll Section</h2>
        <div className="scroll-section">
            <div className="scroll-section-header">
                <h3>{currentTitle}</h3>
            </div>
            <div className="scroll-section-images">
                {items.map((item,index) => (
                    <div key={index} className={`scroll-section-item ${currentIndex === index ? 'scroll-active' : ''}`}>
                        <img src={item.image} alt={item.title} />
                        
                    </div>
                ))}
            </div>    
        </div>
    </div>;
}

export default ScrollSection;