import "./about.css";
import Section from "@/features/components/section/section";
const aboutSanvita = [
    "Sanvita Health is a leading provider of acupuncture and wellness solutions, dedicated to improving the health and well-being of our clients.",
    "With over 160 years of experience, we are committed to delivering the highest quality products and services.",
]

export default function About() {
    return (
        <div className="">
            <main className="">
                <div className="about-container">
                    <h1 className="main-title">About us</h1>
                    <h2 className="subheading">One Sentence Description</h2>
                    <p className="text-lg text-gray-600">Learn more about us and how we are different!</p>
                </div>
                <Section
                    title="Who We Are"
                    content={aboutSanvita}
                    buttonText="Learn More"
                    buttonLink="/about"
                    reverse={false}
                />
            </main>
        </div>
    );
}