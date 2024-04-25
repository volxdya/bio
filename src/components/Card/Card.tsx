import { technologies } from "../../other/technologies";

export function Card({ srcImg, title, link }: technologies) {
    return (
        <div className="col-3">
            <div className="container-stack">
                <a href={link} target="_blank" className="link-stack">
                    <img
                        src={srcImg}
                        alt="icon-stack"
                        className="icon-stack"
                    />
                    <div className="container-title">
                        <p className="text-center title-stack">{title}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}