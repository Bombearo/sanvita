

import "./quality.css"
import Image from "next/image";

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

const images = [
    {
        src: "/images/quality/image2.png",
        alt: "Quality Image 1",
        text: "Made by Japanese medical-grade stainless steel wire​"
    },
    {
        src: "/images/quality/image3.png",
        alt: "Quality Image 2",
        text: "Needle tip under 2000X SEM"
    }
]

const component = items.map((item,index) =>(
<div key={index} className="video-container">
    <span className="video-text">{item.text}</span>
    <video className="quality-video" controls muted autoPlay loop>
        <source src={item.src}/>
    </video>
</div>

))

function QualityPage() {
    return <div>
        <div className="head-container">
            <h1>Quality</h1>
        </div>
        
        <div className="safety-quality">
            <div>
                <h2>Our Quality and Safety Excellency</h2>
            </div>
            <div className="quality-container">
            {component}
            </div>
            
        </div>
            <div className="quality-image">
                {images.map((image, index) => (
                    <div key={index} className={`quality-image-wrapper` + (index % 2 === 0 ? "" : " reverse")}>
                        <div className={"quality-image-item "+ (index % 2 === 0 ? "quality-first" : "quality-second")}>
                            <Image src={image.src} alt={image.alt} width={1000} height={200} />
                        </div>
                        <div className={"quality-image-text " + (index % 2 === 0 ? "quality-second" : "quality-first")}>
                            <p >{image.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        
    </div>;
}

export default QualityPage;