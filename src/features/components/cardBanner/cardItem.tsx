import "./cardItem.css";

interface CardItemProps {
    title: string;
    image?: string;
    description?: string;
    link?: string;
}

function CardItem({ title, image, description, link }: CardItemProps) {
    return (
        <div className="card-item">
            {image && <a href={link}><img src={image} alt={title} className="card-image" /></a>}
            <h3 className="card-title">{title}</h3>
            {description && <p className="card-description">{description}</p>}
        </div>
    );
}

export type { CardItemProps };
export default CardItem;