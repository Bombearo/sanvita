import ProductShowcase from "@/features/components/productShowcase/productShowcase";
import GridSection from "@/features/components/gridSection/gridSection";
import CardBanner from "@/features/components/cardBanner/cardBanner";
import HighlightBanner from "@/features/components/highlightBanner/highlightBanner";
import Image from "next/image";

const mediaItems = [
    "/images/products/needle1.png",
    "/images/products/needle2.png",
    "/images/products/needle3.png",
];

const gridItems = [
    {
        title: "A wide range of handles",
        description: "At Hwato we offer a wide range of handles to suit your needs including Stainless steel, silver plated, copper and spring-type handles.",

    },
    {
        title: "Eco-Friendly Packaging",
        description: "Our packaging is made from PVC-free materials. We offer in bulk packaging to reduce waste and save you money.",

    },
    {
        title: "Production",
        description: "We produce over 3.8 billion needles a year. Our needles are made from high quality stainless steel and are manufactured in a fully automated factory.",

    },
    {
        title:"Sterile Press Needles"
        , description: "Our Sterile Press Needles are designed for maximum comfort and precision at a large scale. They are made from high quality stainless steel and are manufactured in a fully automated factory.",
    },
    /*
    {
        title:"Usage",
        description: "Our needles can be used in both a clinical and home setting. They are designed for maximum comfort and precision at a large scale. They are made from high quality stainless steel and are manufactured in a fully automated factory.",
    }*/
];

const specifications = [
    {
        title: "Gold Needles",
        description: "Our gold needles are made from high quality stainless steel and are manufactured in a fully automated factory. They are designed for maximum comfort and precision at a large scale.",
    },
    {
        title: "Handcrafted Premium Sets",
        description: "Our handcrafted premium sets are made from high quality stainless steel and are manufactured in a fully automated factory. They are designed for maximum comfort and precision at a large scale.",
    }
]

const brands = [
    {
        title: "Hwato",
        image: "/images/brands/hwato.png",
        paragraphs :[
            "High end brand of acupuncture needles",
            "Popular in the US, Australia, and Europe",
        ]
    },
    {
        title:"Tony",
        image:"/images/brands/tony.jpeg",
        paragraphs:[
            "Middle-end market",
            "Increase in popularity in Southeast Asia, Europe, South America, and the Middle East"
        ]
    }

]

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

const brandItems = brands.map((brand) => (
    <div key={brand.title} className="brand-item">
        
        <Image src={brand.image} alt={brand.title} width={100} height={100} />
        <div className="brand-paragraphs">
            <h3>{brand.title}</h3>
            {brand.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    </div>
));

function AcupuncturePage() {
    return (
        <div>
            <h1>Acupuncture</h1>
            <p>Welcome to the Acupuncture page!</p>
            <div className="brand-section">
                { brandItems }
            </div>
            <GridSection title="Our Needles" mediaItems={mediaItems} gridItems={gridItems} />
            <CardBanner title="Special Specifications" cardItems={specifications} />
            <ProductShowcase
                title="What makes Hwato needles UNIQUE?"
                description="The quality of our needles is unmatched."
                imageUrl="/images/HQ.png"
                paragraphs={[
                    "Our painless insertion",
                    "High manufacturing standards",
                    "Fully Automated production",
                    "Inspection",
                    "Packaging",
                ]}
            />
            <HighlightBanner
                title="Our Handles"
                items={highlightItems}
                />
        </div>
    );
}

export default AcupuncturePage;
