import './Loader.css'

export function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center container-loading">
            <div>
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <h1 className="text-center my-5">Loading, please wait...</h1>
                    <div className="d-flex justify-content-center">
                        <img src="https://vk.com/sticker/1-18956-512b" height={230} className="mt-4"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}