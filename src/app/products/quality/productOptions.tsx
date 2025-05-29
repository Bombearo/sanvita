"use client";
import { useState } from 'react';
import Image from 'next/image';
import HighlightBanner from '@/features/components/highlightBanner/highlightBanner';
import ScrollSection from '@/features/components/scrollSection/scrollSection';

const highlightItems = [
    {
        image: "/images/needles/copper.png",
        title: "Copper Handle",
        text: [
            "Handle with moderate hardness",
            "Good Thermal Conductivity and toughness",
            "With tail, good for moxibustion and manipulation"
        ]
    },
    {
        image: "/images/needles/silver.png",
        title: "Silver-plated Handle",
        text: [
            "Upscale appearance",
            "Handle with moderate hardness",
            "Good Thermal Conductivity and toughness",
            "With tail, good for moxibustion and manipulation"
        ]
    },
    {
        image: "/images/needles/steelSpring.png",
        title: "Stainless Steel Spring Handle",
        text: [
            "Without tail",
            "Handle with higher hardness",
            "Good Thermal Conductivity and toughness",
            "For fast-penetration practitioner and beginner"
        ]
    },
    {
        image: "/images/needles/steelRing.png",
        title: "Stainless Steel Loop Handle",
        text: [
           "With tail",
            "Handle with higher hardness",
            "Good thermal conductivity and toughness",
            "For fast-penetration practitioner and beginner"
        ]
    }
]


function ProductOptions() {
    const [currentState, setCurrentState] = useState<string>('table');

    const handleStateChange = (newState: string) => {
        setCurrentState(newState);
    };
    const renderContent = () => {
        switch (currentState) {
            case 'table':
                return <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/images/options/table.png" alt="Table View" width={500} height={300} />
                    <Image src="/images/options/needles.png" alt="Table View 2" width={500} height={300} />
                </div>;
            case 'handles':
                return <div>
                    <HighlightBanner
                title="Our Handles"
                items={highlightItems}
                />
                <ScrollSection
                items={highlightItems}
                ></ScrollSection>
                </div>;
            case 'grid':
                return <div>Grid content goes here.</div>;
            default:
                return <div>Default content goes here.</div>;
        }
    };
    return (
        <div>
            <h2>Product Options</h2>
            <p>Here you can find various options for our products.</p>
            <div>
                <button onClick={() => handleStateChange('table')}>Table View</button>
                <button onClick={() => handleStateChange('handles')}>Handles + Packaging</button>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default ProductOptions;