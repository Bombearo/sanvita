import CardBanner from "@/features/components/cardBanner/cardBanner";
import "./home.css"
import Section from "@/features/components/section/section";
import GridSection from "@/features/components/gridSection/gridSection";
import type { Properties } from "csstype";
import { GridSectionItemProps } from "@/features/components/gridSection/gridSectionItem";


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

  const partners = [
    {
      title: "China Academy of Chinese Medical Sciences",
      image: "http://en.cacms.ac.cn/cmsen/template/images/logo.png",
      link: "http://en.cacms.ac.cn/",

    },
    {
      title: "Peking University Health Science Centre",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1teXeTAVaR08l4AtxTJBYqgpLXiQiMKT-mQ&s",
      link: "https://e.bjmu.edu.cn/",
    },
    {
      title: "Nanjing & Shanghai University of TCM",
      image: "https://www.njucm.edu.cn/english/images/logo.png",
      link: "https://www.njucm.edu.cn/english/index.html",
    },
    {
      title: "WFAS",
      image: "/images/partner4.png",
      link: "/partners/partner4",
    }
  ]

  const globalReach: GridSectionItemProps[] = [
    {
      title: "Markets",
      description: "Our markets include North America, Europe, Australia, Southeast Asia, Middle East, South America"
    },
    {
      title: "Certifications",
      description: "We have certifications in CE, FDA, TGA, ISO 13485"
    },
    {
      title: "Global Reach",
      description: "We serve up to 183+ different countries around the world"
    },
    {
      title: "Other Perks",
      description: "Customized packaging and multilingual support"
    }
  ]

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
    <GridSection title="Global Reach and Certifications" gridItems={globalReach} mediaItems={["/images/HQ.png"]} />
    <CardBanner title="Our Partners" cardItems={partners} />
    </main>
    
  );
}

