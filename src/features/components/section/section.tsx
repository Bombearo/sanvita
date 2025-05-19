import "./section.css"
import Link from "next/link";
import Carousel from "../carousel/carousel";

interface SectionProps {
    title: string;
    content: string[];
    buttonText: string;
    buttonLink: string;
    media?: string[];
    reverse?: boolean;
}


function Section({ title, content, buttonText, buttonLink, media, reverse }: SectionProps) {


    return (
        <section className="section">
            <div className={`section-container ${reverse ? "reverse" : ""}`}>
                <div className="section-content">
                    <div>
                        <h2 className="section-title">{title}</h2>
                    </div>
                    {content.map((paragraph, index) => (
                        <p key={index} className="section-paragraph">{paragraph}</p>
                    ))}
                    <Link href={buttonLink} className="section-button">{buttonText}</Link>
                </div>
                    {media && media.length > 0 && (
                        <div className="section-media">
                            <Carousel items={media} />
                        </div>
                    )}
                </div>
            

        </section>
    );
}

export default Section;