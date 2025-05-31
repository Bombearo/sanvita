import ShowcaseText from "./showcaseText";
import Image from "next/image";
import './productShowcase.css';
interface ProductShowcaseProps {
    title: string;
    description: string;
    imageUrl: string;
    paragraphs: string[];
}

function ProductShowcase({ title, description, imageUrl, paragraphs }: ProductShowcaseProps) {
    // Validate length of paragraphs is 5
    if (paragraphs.length !== 5) {
        return <p>Error: paragraphs array must contain exactly 5 elements.</p>;
    }


    return (
        <div className="product-showcase">
            <div className="product-left">
                <ShowcaseText text={paragraphs[0]}/>
                <ShowcaseText text={paragraphs[1]}/>
            </div>
            <div className="product-middle">
                <h1 className="product-title">{title}</h1>
                <p className="product-description">{description}</p>
                <Image src={imageUrl} alt="Product" className="product-image" width={1000} height={1000}/>
                <ShowcaseText text={paragraphs[2]}/>

            </div>
            <div className="product-right">
                <ShowcaseText text={paragraphs[3]}/>
                <ShowcaseText text={paragraphs[4]}/>
            </div>
        </div>
    );
}

export default ProductShowcase;
