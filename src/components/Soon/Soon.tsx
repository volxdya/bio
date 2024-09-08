import './Soon.css';
interface Props {
    text: string;
    other?: string;
}

export function Soon({ text, other }: Props) {
    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="mt-5">
                <h1 className="text-center soon-text">{text}</h1>
                <p className="other-text text-center">{other}</p>
                <div className="d-flex justify-content-center">
                    <img
                        src="https://i.ibb.co/njDs10f/1-88375-512b-Photoroom.png"
                        height={230}
                        className="mt-4"
                        alt="" />
                </div>
            </div>
        </div>
    )
}