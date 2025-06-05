
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
    const [currentIndex, setCurrentIndex] = useState<number>(0);

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
                <div className="scroll-section-content" style={{ maxWidth: 500 }}>
                    <Swiper
                        style={{ width: "100%", height: "500px" }}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={(swiper) => {
                            // Swiper's activeIndex includes duplicated slides when loop is true,
                            // so use realIndex for correct mapping
                            setCurrentIndex(swiper.realIndex);
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={index} className="scroll-section-slide">
                                <Image src={item.image} alt={item.title} width={1000} height={500}  />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>;
}

export default ScrollSection;