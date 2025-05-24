import CardBanner from "@/features/components/cardBanner/cardBanner";
import "./home.css"
import GridSection from "@/features/components/gridSection/gridSection";
import type { Properties } from "csstype";
import { GridSectionItemProps } from "@/features/components/gridSection/gridSectionItem";
import QuickInfo from "@/features/components/quickInfo/quickInfo";


export default function Home() {
  const videoSrc = "/videos/sanvita.mp4";

  /*const videos = [
    videoSrc,]

  const paragraphs = [
    "At Sanvita Health, we offer only the finest products in the world.",

    "Every item is carefully chosen as the best in its class - selected for its quality, integrity, and values.",

    "We serve those who choose only the best."
  ];*/

 

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
      image: "",
      link: "http://en.cacms.ac.cn/",

    },
    {
      title: "Peking University Health Science Centre",
      image: "",
      link: "https://e.bjmu.edu.cn/",
    },
    {
      title: "Nanjing & Shanghai University of TCM",
      image: "",
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

  const quickInfo = [
    {
      bodyText:"Countries Served",
      boldText:"183+"
    },
    {
      bodyText:"Annual Needle Output",
      boldText:"3.8 billion"
    },
    {
      bodyText:"Product Categories",
      boldText:"40+"
    },
    {
      bodyText:"Lead drafter of 1728:2014 - Sterile Acupuncture Needles for Single Use",
      boldText:"ISO"
    },
    {
      bodyText:"Market Share",
      boldText:"55%"
    },
    {bodyText:"Valid Patents",
      boldText:"155"
    }
  ]

  const manufacturing = [
    {
      title: "Production Line and Manufacturing Capability",
      description: "A production line equipped with advanced technology to produce up to 5 billion acupuncture needles"
    },
    {
      title: "Our Workshop",
      description: "Over 5000 square meters of clean room to produce sterile needles"
    },
    {
      title: "R&D",
      description: "Continuous investment in research and development for innovative solutions with over 2000 square meters in our R&D center"
    },
    {title: "Production Volume",
      description:"Over the last 10 years, the production and sales volume of acupuncture needles reached 17.5 billion"
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
        <div className = "hero-text">
          <div className="hero-welcome">
          <h1 className="text-8xl font-bold">Welcome to Sanvita</h1>
        </div>
        <div className="hero-mission">
          <h2 className="text-4xl font-semibold">Brand Mission</h2>
          <p className="text-4xl text-gray-600">
          Let our life and health benefit the wisdom of Chinese Medicine!
        </p>
        </div>  
        </div>
       
        
      </div>
    </div>
    
    <QuickInfo title="162 Years of Excellence" description="as the Quintessential Leader in Traditional Chinese Medicine Devices" information={quickInfo} logoUrls={["/images/hwato.jpeg","/images/CTB.png"]} />

    <GridSection title="Global Reach and Certifications" gridItems={globalReach} mediaItems={["/images/HQ.png"]} />
    <CardBanner title="Our Partners" cardItems={partners} />

    <GridSection title="Manufacturing" gridItems={manufacturing} mediaItems={["/images/factory.png"]} reverse={true} subtitle="The world's largest production scale of needles"/>
    </main>
    
  );
}

