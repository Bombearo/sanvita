import ProductShowcase from "@/features/components/productShowcase/productShowcase";

function AcupuncturePage() {
    return (
        <div>
            <h1>Acupuncture</h1>
            <p>Welcome to the Acupuncture page!</p>
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
