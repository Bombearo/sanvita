"use client"

import {useState, useEffect} from 'react';
import './highlightBanner.css';
import Image from 'next/image';

interface HighlightBannerProps {
    title: string
    items : HighlightItem[];
}

interface HighlightItem{
    image: string;
    title: string;
    text: string[];
}
function HighlightBanner({ title, items }: HighlightBannerProps) {
    const [currentTitle, setCurrentTitle] = useState<string>('');
    const [currentText, setCurrentText] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (items.length > 0) {
            setCurrentTitle(items[0].title);
            setCurrentText(items[0].text);
        }
    }, [items]);

    return (
        <div className="highlight-banner">
            <h2>{title}</h2>
            <div className="highlight-items">

                <div className="highlight-item">
                    <h3>{currentTitle}</h3>
                    <div>
                        <ul>
                        {currentText.map((line, i) => (
                            <li key={i} >{line}</li>
                        ))}
                        </ul>
                        
                    </div>
                </div>

                <div className="highlight-item-images">
                    {items.map((item, index) => (
                        <div key={index} className={`highlight-item-images-content ${currentIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => {
                                setCurrentIndex(index);
                                setCurrentTitle(item.title);
                                setCurrentText(item.text);
                            }}>

                            <Image src={item.image} alt={item.title} width={1000} height={500}/>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HighlightBanner;