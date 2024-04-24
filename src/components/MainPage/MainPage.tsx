import './MainPage.css';

export function MainPage() {
    return (
        <>
            <div className="text-center main-info">
                <p className="full-name">Vladimir</p>
                <p className="job-title">FullStack developer</p>
            </div>
            <div className="container-btns">
                <button className="button">About me</button>
                <button className="button mt-2">Stack</button>
            </div>
        </>
    );
}