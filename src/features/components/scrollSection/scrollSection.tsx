
"use client";
import {  useState } from 'react';
import './scrollSection.css';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image"


interface ScrollSectionItem{
    image: string;
    title: string;
    text: string[];
    
}

interface ScrollSectionProps {
    items: ScrollSectionItem[];
    reverse?: boolean;
}

function ScrollSection({ items }: ScrollSectionProps) {
    const [currentIndex] = useState<number>(0);

    if (items.length < 3){
        throw new Error("ScrollSection requires at least 3 items");
    }


    return <div>
            <h2>Scroll Section</h2>
            <div className="scroll-section">
                <div className="scroll-section-header">
                    <h3>{items[currentIndex].title}</h3>
                    {items[currentIndex].text.map((paragraph, index)=>(
                        <div key={index}>
                            <p >{paragraph}</p>
                        </div>
                    ))}
                </div>
                <Swiper
                    className="scroll-section-swiper"
                    slides-per-view={3}
                    space-between="10"
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    direction="horizontal"
                    style={{ width: '50%', height: '300px' }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image className="swiper-image" src={item.image} alt={item.title} width={100} height={100}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </div>;
}

export default ScrollSection;