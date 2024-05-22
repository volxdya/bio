import { Link } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
    return (
        <>
            <div className="text-center main-info">
                <p className="main-title">Vladimir</p>
                <p className="other-title">FullStack developer</p>
            </div>
            <div className="container-btns">
                <Link to="/about">
                    <button className="button">About me</button>
                </Link>
                <Link to="/stack">
                    <button className="button mt-2">Stack</button>
                </Link>
                <a href="https://t.me/volxdya" target='_blank'>
                    <button className="button mt-2">Telegram</button>
                </a>
                <a href="https://github.com/l1agosta" target='_blank'>
                    <button className="button mt-2">GitHub</button>
                </a>
            </div>
        </>
    );
}