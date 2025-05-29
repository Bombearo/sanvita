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

const productOptions = [
    {
        image:"/images/options/productOptions/gold.png",
        title:"Gold Plated Needles",
        text: ["Upscale appearance",
            "100pcs/box, 10000pcs/carton",
            "Sterilized with EOG"
        ],
    },
    {
        image:"/images/options/productOptions/hand.png",
        title:"Hand Needles",
        text: ["Size: 0.18x7mm and 0.16x7mm",
            "10 Needles in a foam for easy access",
            "Sterilised with EOG"
        ],
    },
    {
        image:"/images/options/productOptions/scalp.png",
        title:"Scalp needles",
        text: ["For scalp acupuncture",
            "15mm short handle",
            "Sizes available: 0.20x20mm, 0.20x30mm, 0.22x30mm",
            "100pcs/box, 10000pcs/carton",
            "Sterilised with EOG"
        ],
    },
    {
        image:"/images/options/productOptions/detox.png",
        title:"Detox needles",
        text: [
            "For general and facial acupuncture and NADA protocol",
            "Highly visible handle for easy locating",
            "Sizes available: 0.20x7mm, 0.20x13mm, 0.22x7mm, 0.22X13mm",
            "5pcs/box, 500pcs/carton",
            "Sterilised with EOG"
        ],
    },
    {
        image:"/images/options/productOptions/tabless.png",
        title:"Scalp needles",
        text: ["Tabless design, no mess",
            "One hand aim and insert application",
            "Thermal blister package",
            "Made from surgical stainless steel",
            "Featured awn-shaped tip for smooth insertion",
            "100pcs/box, 10000pcs/carton",
            "Sterilised with EOG"
        ],
    },


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
                items={productOptions}
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