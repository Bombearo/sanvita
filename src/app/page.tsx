
import Link from "next/link";
import "./home.css"
import QuickInfo from "@/features/components/quickInfo/quickInfo";

const currentYear = new Date().getFullYear();

const titleText =[
  "Hwato acupuncture needles deliver painless insertion, support confident manipulation, providing a complete solution for both traditional acupuncture practicioners and patients seeking comfort and consistent clinical results."
  ,
  "Hwato is a manufacturer you can trust - with safety and hygeine guaranteed.",
  
   "Certified by <strong>CE</strong>, and <strong>FDA</strong>, and fully compliant with the international standard <strong>ISO 17218:2014-Sterile Acupuncture Needles for Single Use</strong>.",
  "Hwato needles offer more than just reliable tools - they deliver a complete solution for enhanced therapeutic outcomes and patient comfort."
];

const items = [
    {
        src:"/videos/quality1.mp4",
        text:"High-speed image detection, automatic removing unqualified needles​"
    },
    {
        src:"/videos/quality2.mp4",
        text:"Automatic intelligent inspection and packaging line"
    }
]


export default function Home() {
  //const videoSrc = "/videos/sanvita.mp4";

  /*const videos = [
    videoSrc,]

  const paragraphs = [
    "At Sanvita Health, we offer only the finest products in the world.",

    "Every item is carefully chosen as the best in its class - selected for its quality, integrity, and values.",

    "We serve those who choose only the best."
  ];*/

 

  /*const heroStyle: Properties = {
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
*/


  const quickInfo = [
    {
      bodyText:"Countries we export to",
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
      bodyText:"of high quality and safety standard compliant products. CE Certified since 1997 ",
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

  /*
  const home = <div className="welcome-container">
        <h1>Welcome to Sanvita!</h1>
        <p>We are your trusted partner in Traditional Chinese Medicine Devices, and we are committed to providing you with the highest quality products and services.</p>
        <p>Sanvita Health Ltd is MHRA registered UK based importer for Suzhou Medical Appliance Factory (Hwato)</p>
            
      </div>
  */

const component = items.map((item,index) =>(
<div key={index} className="video-container">
    <span className="video-text">{item.text}</span>
    <video className="quality-video" controls muted autoPlay loop>
        <source src={item.src}/>
    </video>
</div>

))


  return (
    <main>
      <div className="title-container">
        <div className="title-header">
          <h1>We provide acupuncture solutions for both practitioners and patients</h1>
        </div>
        <div className="title-text-container">
          {titleText.map((text, index) => (
            <p key={index} className="title-text" dangerouslySetInnerHTML={{ __html: text }}/>
          ))}
        </div>
      </div>
    <QuickInfo title="162 Years of Excellence" description="as the Quintessential Leader in Traditional Chinese Medicine Devices" information={quickInfo} logoUrls={["/images/hwato.jpeg","/images/CTB.png"]} />
    <div className="quality-video-container">
      <div className="quality-video-header">
        <h2>Our Quality Commitment</h2>
        <p>Hwato needles are manufactured with the highest standards of quality and safety, ensuring that you receive the best products for your practice.</p>
      </div>
      <div className="videos">
        {component}
      </div>      
      <div className="quality-video-link-container">
        <Link href="/products/quality" className="quality-video-link">
          <button>Learn more about our quality</button>
        </Link>
      </div>
    </div>
    
    <div className="home-contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-text">For the full Hwato catalogue, or for any enquiries and orders, please contact:<br/>
        📧 <a href="mailto:info@sanvitahealth.co.uk">info@sanvitahealth.co.uk</a>
      </p>
    </div>
    
    </main>
    
  );
}

