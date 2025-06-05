"use client";
import { useState } from 'react';
import HighlightBanner from '@/features/components/highlightBanner/highlightBanner';
import Image from 'next/image';
import './productOptions.css';

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

const tableItems = [
    {
        diameter: "0.12",
        gauge: "#44",
        colourCode: "#00503A",
        lengthMM: "7",
        lengthInch: "0.25"
    },
    {
        diameter: "0.14",
        gauge: "#42",
        colourCode: "#5DA92B",
        lengthMM: "13,15",
        lengthInch: "0.5"
    },
    {
        diameter: "0.16",
        gauge: "#40",
        colourCode: "#E70214",
        lengthMM: "25,30",
        lengthInch: "1"
    },
    {
        diameter: "0.18",
        gauge: "#38",
        colourCode: "#FDEE00",
        lengthMM: "40",
        lengthInch: "1.5"
    },
    {
        diameter: "0.20",
        gauge: "#36",
        colourCode: "#029DE7",
        lengthMM: "50",
        lengthInch: "2"
    },
    {
        diameter: "0.22",
        gauge: "#34",
        colourCode: "#EE88B4",
        lengthMM: "60",
        lengthInch: "2.5"
    },
    {
        diameter: "0.25",
        gauge: "#32",
        colourCode: "#8857A0",
        lengthMM: "75",
        lengthInch: "3"
    },
    {
        diameter: "0.30",
        gauge: "#30",
        colourCode: "#6D3909",
        lengthMM: "100",
        lengthInch: "4"
    },
    {
        diameter: "0.35",
        gauge: "#28",
        colourCode: "#671485",
        lengthMM: "125",
        lengthInch: "5"
    },
    {
        diameter: "0.40",
        gauge: "#26",
        colourCode: "#000",
        lengthMM: "150",
        lengthInch: "6"
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
                return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <table style={ {borderCollapse: 'collapse', marginTop: '20px'}}>
                        <thead>
                            <tr>
                                <th colSpan={3} className="diameter">Needle Diameter</th>
                                <th colSpan={2} className="length">Needle Length</th>

                            </tr>
                            <tr>
                                <th className='diameter'>mm</th>
                                <th className='diameter'>Gauge</th>
                                <th className='diameter'>Colour Code</th>
                                <th className='length'>mm</th>
                                <th className='length'>Inch</th>

                            </tr>
                        </thead>
                        <tbody>
                            {tableItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.diameter}</td>
                                    <td>{item.gauge}</td>
                                    <td>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" style={{ verticalAlign: 'middle' }}>
                                            <circle cx="8" cy="8" r="7" fill={item.colourCode} stroke="#ccc" strokeWidth="1" />
                                        </svg>
                                    </span></td>
                                    <td className="length">{item.lengthMM}</td>
                                    <td className="length">{item.lengthInch}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>;
            case 'handles':
                return <div>
                    <HighlightBanner
                title="Our Handles"
                items={highlightItems}
                />
                <div className="flex flex-col items-center justify-center">
                    <h3>Types of Needles</h3>
                    <div className="product-options-container">
                    {productOptions.map((option, index) => (
                        <div key={index} className={"product-option" + (index % 2 === 0 ? " reverse" : "")}>
                            <div className={'product-option-image-wrapper' + (index % 2 === 0 ? "" : " first")}>
                            <Image src={option.image} alt={option.title} className="product-option-image" width={300} height={300} />
                            </div>
                            <div className={'product-option-text ' + (index % 2 === 0 ? " second" : " first")}>
                            <h3>{option.title}</h3>
                            <ul>
                                {option.text.map((text, textIndex) => (
                                    <li key={textIndex}>{text}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </div>
                </div>;
            case 'grid':
                return <div>Grid content goes here.</div>;
            default:
                return <div>Default content goes here.</div>;
        }
    };
    return (
        <div>
            <div className="flex">
                <button className = {"product-options-button" + (currentState === 'table' ? ' btn-active' : '')}
                onClick={() => handleStateChange('table')}>Table View</button>
                <button className = {"product-options-button" + (currentState === 'handles' ? ' btn-active' : '')}
                onClick={() => handleStateChange('handles')}>Handles + Packaging</button>
                <button className = {"product-options-button" + (currentState === 'grid' ? ' btn-active' : '')}
                onClick={() => handleStateChange('grid')}>Grid View</button>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default ProductOptions;