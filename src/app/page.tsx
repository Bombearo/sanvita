import "./home.css"
import Section from "@/features/components/section/section";

export default function Home() {
  const videoSrc = "/videos/sanvita.mp4";

  const videos = [
    videoSrc,]

  const paragraphs = [
    "At Sanvita Health, we offer only the finest products in the world.",

    "Every item is carefully chosen as the best in its class - selected for its quality, integrity, and values.",

    "We serve those who choose only the best."
  ];

  return (
    <main>
    <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] gap-4 p-4">
      <div className="hero flex flex-col items-center justify-center gap-4">
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

