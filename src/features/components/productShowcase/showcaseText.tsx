import "./showcaseText.css";

interface ShowcaseTextProps {
    icon?: string;
    text:string;
}

function ShowcaseText({ icon, text }: ShowcaseTextProps) {
    return (
        <div className="showcase-text">
            {icon && <img src={icon} alt="Icon" />}
            <p className="showcase-text-paragraph">{text}</p>
        </div>
    );
}

export default ShowcaseText;
