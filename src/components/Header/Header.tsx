import './Header.css';
import {header, IHeader} from "../../other/items-header.ts";
import {Link, useLocation} from "react-router-dom";

export function Header() {

    const location = useLocation();

    console.log(location.pathname);

    return (
        <header className="d-flex gap-4 justify-content-between px-5 align-items-center">
            {header.map((item: IHeader) => {
                return (
                    <Link to={item.link} className={location.pathname === item.link ? "active header-link" : "header-link"}>{item.title}</Link>
                )
            })}
        </header>
    );
}