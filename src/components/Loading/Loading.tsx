import './Loading.css';

export function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center container-spinner">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}