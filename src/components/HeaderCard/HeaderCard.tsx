import './HeaderCard.css';
import {ISidebar as Props} from "../../other/items-sidebar.tsx";


export function HeaderCard({component, preTitle, link, title}: Props) {
    return (
        <>
            <div className="d-flex gap-3 mt-4 px-xl-0 px-2">
                <div className="sidebar-icon">
                    <a href={link} target="_blank">
                        {component}
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <p className="title-info m-0">{preTitle}</p>
                        <a href={link} className="title-link" target="_blank">{title}</a>
                    </div>
                </div>
            </div>
        </>
    );
}