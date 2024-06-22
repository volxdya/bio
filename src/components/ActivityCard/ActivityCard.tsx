import './ActivityCard.css';
import {IActivity as Props} from "../../other/items-activity.tsx";

export function ActivityCard({component, title, text}: Props) {
    return (
        <>
            <div className="activity-card p-4 mt-1">
                <div className="d-flex justify-content-end">
                    <span className="activity-card-icon">
                        {component}
                    </span>
                </div>
                <div className="activity-card-content">
                    <h3 className="activity-title text-xl-start text-center">{title}</h3>
                    <p className="activity-text mt-2 text-xl-start text-center">{text}</p>
                </div>
            </div>
        </>
    );
}