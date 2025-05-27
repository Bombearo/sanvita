
import "./home.css"
import type { Properties } from "csstype";
import QuickInfo from "@/features/components/quickInfo/quickInfo";
import BrandMission from "@/features/components/brandMission/brandMission";

const currentYear = new Date().getFullYear();


export default function Home() {
  //const videoSrc = "/videos/sanvita.mp4";

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

  const hero =<div className="hero-container">
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
          <p className="text-2xl font-semibold">
            Your Trusted Partner in Traditional Chinese Medicine Devices
          </p>
        </div>
      </div>
    </div>
  </div>;



  const quickInfo = [
    {
      bodyText:"Countries Served",
      boldText:"183+"
    },
    {
      bodyText:"Annual Needle Output",
      boldText:"4.5 billion"
    },
    {
      bodyText:"Product Categories Covered",
      boldText:"40"
    },
    {
      bodyText:"of high quality and safety standard compliant products. Certified since 1997 ",
      boldText:`${currentYear - 1997} years`
    },
    {
      bodyText:"Market Share",
      boldText:"60%"
    },
    {bodyText:"Valid Patents",
      boldText:"155"
    }
  ]

  

  return (
    <main>
      <div className="welcome-container">
        <h1>Welcome to Sanvita!</h1>
        <p>We are your trusted partner in Traditional Chinese Medicine Devices, and we are committed to providing you with the highest quality products and services.</p>
        <p>Sanvita Health Ltd is MHRA registered UK based importer for Suzhou Medical Appliance Factory (Hwato)</p>
            
      </div>
    <BrandMission />
    <QuickInfo title="162 Years of Excellence" description="as the Quintessential Leader in Traditional Chinese Medicine Devices" information={quickInfo} logoUrls={["/images/hwato.jpeg","/images/CTB.png"]} />

    
    </main>
    
  );
}

