
import ProductOptions from './productOptions';
import "./quality.css"

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
        <ProductOptions />
    </div>;
}

export default QualityPage;