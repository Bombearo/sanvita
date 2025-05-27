import "./about.css";
import Section from "@/features/components/section/section";
import GridSection from "@/features/components/gridSection/gridSection";
import CardBanner from "@/features/components/cardBanner/cardBanner";
import { GridSectionItemProps } from "@/features/components/gridSection/gridSectionItem";

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
                    media={["/videos/sanvita.mp4"]}
                    reverse={false}
                />
                <GridSection
                    title="HwaTo"
                    gridItems={gridItems}
                    button={{ text: "View Products", buttonLink: "/products" }}
                    mediaItems={["/images/hwato.jpeg","/images/HQ.png"]}
                />

                <GridSection title="Global Reach and Certifications" gridItems={globalReach} mediaItems={["/images/HQ.png"]} />
    <CardBanner title="Our Partners" cardItems={partners} />

    <GridSection title="Manufacturing" gridItems={manufacturing} mediaItems={["/images/factory.png"]} reverse={true} subtitle="The world's largest production scale of needles"/>
    
            </main>
        </div>
    );
}