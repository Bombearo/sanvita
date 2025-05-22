import "./showcaseText.css";
import Image from "next/image";

interface ShowcaseTextProps {
    icon?: string;
    text:string;
}

function ShowcaseText({ icon, text }: ShowcaseTextProps) {
    return (
        <div className="showcase-text">
            {icon && <Image src={icon} alt="Icon" fill={true}/>}
            <p className="showcase-text-paragraph">{text}</p>
        </div>
    );
}

export default ShowcaseText;
