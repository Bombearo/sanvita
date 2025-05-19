import "./home.css"
import Section from "@/features/components/section/section";
import type { Properties } from "csstype";
export default function Home() {
  const videoSrc = "/videos/sanvita.mp4";

  const videos = [
    videoSrc,]

  const paragraphs = [
    "At Sanvita Health, we offer only the finest products in the world.",

    "Every item is carefully chosen as the best in its class - selected for its quality, integrity, and values.",

    "We serve those who choose only the best."
  ];

 

  const heroStyle: Properties = {
      height: '100vh', 
      maxHeight:"600px",
      width: '50vw', 
      backgroundSize: 'contain', 
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      bottom:"0px",
      zIndex: -1,
      mixBlendMode: 'multiply' as Properties['mixBlendMode'],
      margin: '0 auto',
      marginTop:"auto",
  }

  return (
    <main>
    <div className="hero-container">
      <div className="hero flex flex-col items-center justify-center">
        <div style={
          { backgroundImage: `url('/images/hero.png')`,
            ...heroStyle,
            }
        }></div>
        <h1 className="text-4xl font-bold">Welcome to Sanvita</h1>
        <p className="text-lg text-gray-600">
          Let Life and Health benefit the wisdom of Chinese Medicine
        </p>
        <p className="text-lg text-gray-600">
          Over 160 Years of Excellence in Acupuncture Innovation
        </p>
      </div>
    </div>
    <div className="intro">
      <Section title="We are Sanvita" content={paragraphs} buttonText="Learn More" buttonLink="/about" media={videos}/>

    </div>
    </main>
    
  );
}

