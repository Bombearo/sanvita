
"use client";
import { useState } from 'react';
import './scrollSection.css';
import { register } from "swiper/element/bundle";
register();

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
            <swiper-container
                className="scroll-section-swiper"
                slides-per-view="3"
                space-between="10"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                direction="horizontal"
                style={{ width: '50%', height: '300px' }}
                >
                    {items.map((item, index) => (
                        <swiper-slide key={index}>
                            <img src={item.image} alt={item.title} />
                        </swiper-slide>
                    ))}
                </swiper-container>
        </div>
    </div>;
}

export default ScrollSection;