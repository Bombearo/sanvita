import "./gridSectionItem.css";

interface GridSectionItemProps {
    title: string;
    description: string;
    header?: string;
}

function GridSectionItem({ title, description, header }: GridSectionItemProps) {
    return (
        <div className="grid-section-item">
            {header && <h3 className="grid-section-item-header">{header}</h3>}
            <h2 className="grid-section-item-title">{title}</h2>
            <p className="grid-section-item-description">{description}</p>
        </div>
    );
}

export type { GridSectionItemProps };
export default GridSectionItem;