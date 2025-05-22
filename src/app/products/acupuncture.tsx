import ProductShowcase from "@/features/components/productShowcase/productShowcase";
import GridSection from "@/features/components/gridSection/gridSection";

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

function AcupuncturePage() {
    return (
        <div>
            <h1>Acupuncture</h1>
            <p>Welcome to the Acupuncture page!</p>
            <GridSection title="Our Needles" mediaItems={mediaItems} gridItems={gridItems} />
            <ProductShowcase
                title="What makes Hwato needles UNIQUE?"
                description="The quality of our needles is unmatched."
                imageUrl="/images/hq.png"
                paragraphs={[
                    "Our painless insertion",
                    "High manufacturing standards",
                    "Fully Automated production",
                    "Inspection",
                    "Packaging",
                ]}
            />
        </div>
    );
}

export default AcupuncturePage;
