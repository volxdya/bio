import './MainPage.css';
import {Header} from "../Header/Header.tsx";
import {About} from "../About/About.tsx";
import {useLocation} from "react-router-dom";

export default function MainPage() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="col-xl-7 main mx-xl-5 mt-xl-2 mt-5">
            <div className="d-xl-block d-none">
                <Header/>
            </div>

            {location.pathname === '/' && (
                <About/>
            )}

            {location.pathname === '/stack' && (
                <div className="d-flex justify-content-center">
                    <div className="mt-5">
                        <h1 className="text-center soon-text">Soon</h1>
                        <img src="https://i.ibb.co/9qFsrN1/image-Photoroom.png" height={175} className="mt-3" alt=""/>
                    </div>
                </div>
            )}

            {location.pathname === '/blog' && (
                <div className="d-flex justify-content-center">
                    <div className="mt-5">
                        <h1 className="text-center soon-text">Soon</h1>
                        <img src="https://i.ibb.co/9qFsrN1/image-Photoroom.png" height={175} className="mt-3" alt=""/>
                    </div>
                </div>
            )}

        </div>
    );
}

// test