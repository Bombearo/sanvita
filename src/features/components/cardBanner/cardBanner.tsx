import CardItem, { CardItemProps } from "./cardItem";
import "./cardBanner.css";

interface CardBannerProps {
    title?: string;
    content?: string[];
    cardItems?: CardItemProps[];
}

function CardBanner({ title, content, cardItems }: CardBannerProps) {
    return (
        <div className="card-banner">
            <div className="banner-title">
                {title && <h2>{title}</h2>}
                {content && <p>{content}</p>}
            </div>
            
            <div className="banner-content">
                {cardItems?.map((item, index) => (
                    <CardItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default CardBanner;