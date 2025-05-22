import GridSectionItem, { GridSectionItemProps } from "./gridSectionItem";
import Carousel from "../carousel/carousel";
import "./gridSection.css"

interface ButtonProps{
    text:string;
    buttonLink:string;
}

interface GridSectionProps {
    title: string;
    mediaItems?: string[];
    gridItems: GridSectionItemProps[];
    reverse?: boolean;
    button?: ButtonProps;
}

function GridSection({ title,gridItems,mediaItems,  reverse, button }: GridSectionProps) {
    return (
        <div className="grid-section container" style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>

            {mediaItems && mediaItems.length > 0 && (
                <div className="grid-section-image">
                    <Carousel items={mediaItems} />
                </div>
            )}
            <div className="grid-section-content">
                <h2 className="grid-section-title">{title}</h2>
                <div className="grid-section-text">
                
                {gridItems.map((item, index) => (
                    <GridSectionItem key={index} {...item} />
                ))}
                </div>
                {button && (
                <div className="grid-section-button">
                    <a href={button.buttonLink} className="button">
                        {button.text}
                    </a>
                </div>
            )}
            </div>
            
            
        </div>
    );
}

export default GridSection;
