import "./quickInfoItem.css";

interface QuickInfoItemProps {
    bodyText: string;
    boldText: string;
}
function QuickInfoItem({ bodyText, boldText }: QuickInfoItemProps) {

    return ( 
    <div className="quick-info-item">
        <div className="quick-info-item-bold">{boldText}</div>
        <div className="quick-info-item-body">
            <p>
                {bodyText}
            </p>
        </div>
    </div> );
}

export type { QuickInfoItemProps };

export default QuickInfoItem;