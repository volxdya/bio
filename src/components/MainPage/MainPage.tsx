import './MainPage.css';
import {Header} from "../Header/Header.tsx";
import {About} from "../About/About.tsx";
import {useLocation} from "react-router-dom";
import {Soon} from "../Soon/Soon.tsx";
import {Blog} from "../Blog/Blog.tsx";

export default function MainPage() {
    const location = useLocation();

    return (
        <div className="col-xl-7 main mx-xl-5 mt-xl-2 mt-5">
            <div className="d-xl-block d-none">
                <Header/>
            </div>

            {location.pathname === '/' && (
                <About/>
            )}

            {location.pathname === '/stack' && (
                <Soon/>
            )}

            {location.pathname === '/blog' && (
                <Blog/>
            )}

        </div>
    );
}

