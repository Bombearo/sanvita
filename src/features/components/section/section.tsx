import "./section.css"
import Link from "next/link";

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
                    <h2 className="section-title">{title}</h2>
                    {content.map((paragraph, index) => (
                        <p key={index} className="section-paragraph">{paragraph}</p>
                    ))}
                    <Link href={buttonLink} className="section-button">{buttonText}</Link>
                </div>
                    {media && media.length > 0 && (
                        <div className="section-media">
                            <video autoPlay controls muted className="section-video">
                                <source src={media[0]} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            

        </section>
    );
}

export default Section;