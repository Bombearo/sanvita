
"use client";
import { useRef, useEffect, useState } from 'react';
import './scrollSection.css';
import { register } from "swiper/element/bundle";
import Image from "next/image"
register();

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
    const swiperElRef = useRef(null);

    if (items.length < 3){
        throw new Error("ScrollSection requires at least 3 items");
    }

    useEffect(() => {
        swiperElRef.current?.addEventListener('swiperslidechange', (event: CustomEvent) => {
            const [swiper] = event.detail;
            console.log(swiper.realIndex)
            setCurrentIndex(swiper.realIndex)
        });
    },[])



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
                <swiper-container
                    ref={swiperElRef}
                    className="scroll-section-swiper"
                    slides-per-view="3"
                    space-between="10"
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    direction="horizontal"
                    style={{ width: '50%', height: '300px' }}
                    
                >
                    {items.map((item, index) => (
                        <swiper-slide key={index}>
                            <Image className="swiper-image" src={item.image} alt={item.title} width={100} height={100}/>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
    </div>;
}

export default ScrollSection;