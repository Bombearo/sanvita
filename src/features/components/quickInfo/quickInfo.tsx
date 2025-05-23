import QuickInfoItem, { QuickInfoItemProps } from "./quickInfoItem";
import "./quickInfo.css";
import Image from "next/image";
interface QuickInfoProps {
    // Define any props you want to pass to the component
    title: string;
    description: string;
    information: QuickInfoItemProps[];
    logoUrls: string[];
}


function QuickInfo({ title, description, information, logoUrls }: QuickInfoProps) {
    const logos = logoUrls.map((logoUrl, index) => (
        <div key={index} className="quick-info-logo-item" style={index !== logoUrls.length - 1 ? { borderRight: "3px solid black", } : {}}>
            <Image src={logoUrl} alt="Logo" width={200} height={200} />
            
        </div>
    ));

    return (
        <div className="quick-info">
            <div className="quick-info-header">
                <div className="quick-info-logo">
                    {logos}
            </div>
            <div className="quick-info-title">
                <p className="quick-info-description">
                    <span className="quick-info-title-bold">{title}</span>
                </p>
                <p className="quick-info-description">{description}</p>
            </div>
            
        </div>

        <div className="quick-info-items">
            {information.map((item, index) => (
            <QuickInfoItem key={index} {...item} />
        ))}
        </div>
        
    </div> );
}

export default QuickInfo;