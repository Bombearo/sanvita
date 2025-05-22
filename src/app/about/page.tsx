import "./about.css";
import Section from "@/features/components/section/section";
import GridSection from "@/features/components/gridSection/gridSection";

/*interface ButtonProps{
    text:string;
    buttonLink:string;
}*/

const aboutSanvita = [
    "Sanvita Health is a leading provider of acupuncture and wellness solutions, dedicated to improving the health and well-being of our clients.",
    "With over 160 years of experience, we are committed to delivering the highest quality products and services.",
]


const gridItems = [
    {
        title: "Suzhou Medical Appliance Factory",
        description: "Suzhou Medical Appliance Factory, known globally under its brand Hwato, is a leading manufacturer of high-quality acupuncture needles and traditional Chinese medicine (TCM) devices. Founded over 160 years ago, and with a strong focus on safety, precision, and innovation, the company has been setting industry standards since 1980.",
    },
    {
        title: "Chinese National Standard",
        description: "As the key organization behind the official Chinese national standard for acupuncture needles (GB2024), Suzhou Medical Appliance Factory has led multiple revisions to ensure quality and consistency. It is also the principal drafter of ISO 17218:2014 — Sterile Acupuncture Needles for Single Use.",
    },
    {
        title: "Global Growth of TCM",
        description: "By combining decades of expertise with international quality standards (ISO), the company supports the global growth of TCM and offers trusted tools to practitioners worldwide."
    }
]
export default function About() {
    return (
        <div className="">
            <main className="">
                <div className="about-container">
                    <h1 className="main-title">About us</h1>
                    <h2 className="subheading">At Sanvita, we are dedicated to providing high-quality acupuncture products and services.</h2>
                    <p className="text-lg text-gray-600">Learn more about us and how we are different!</p>
                </div>
                <Section
                    title="Who We Are"
                    content={aboutSanvita}
                    buttonText="Learn More"
                    buttonLink="/about"
                    reverse={false}
                />
                <GridSection
                    title="HwaTo"
                    gridItems={gridItems}
                    button={{ text: "View Products", buttonLink: "/products" }}
                    mediaItems={["/images/hwato.jpeg","/images/HQ.png"]}
                />
            </main>
        </div>
    );
}