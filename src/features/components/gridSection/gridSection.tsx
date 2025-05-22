import GridSectionItem, { GridSectionItemProps } from "./gridSectionItem";
import Carousel from "../carousel/carousel";
import "./gridSection.css"

interface GridSectionProps {
    title: string;
    mediaItems: string[];
    gridItems: GridSectionItemProps[];
    reverse?: boolean;
}

function GridSection({ title,mediaItems, gridItems, reverse }: GridSectionProps) {
    return (
        <div className="grid-section container" style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>

            <div className="grid-section-image">
                <Carousel items={mediaItems} />
            </div>
            <div className="grid-section-content">
                <h2 className="grid-section-title">{title}</h2>
                <div className="grid-section-text">
                
                {gridItems.map((item, index) => (
                    <GridSectionItem key={index} {...item} />
                ))}
                </div>
            </div>
            
        </div>
    );
}

export default GridSection;
