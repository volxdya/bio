import './Stack.css';
import { technologies } from "../../other/technologies";
import { Card } from "../Card/Card";
import { Link } from 'react-router-dom';

export default function Stack() {
    return (
        <>
            <div className="text-center main-info">
                <p className="main-title">Stack</p>
            </div>
            <div className="mx-2 me-2 wrapper-all-techonologies">

                <div className='d-flex justify-content-center mt-4'>
                    <div className="container-cards d-flex justify-content-center flex-wrap gap-4">
                        {technologies.map((item) => {
                            return (
                                <Card
                                    title={item.title}
                                    link={item.link}
                                    srcImg={item.srcImg}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>

            <div className="mt-5 d-flex justify-content-center">
                <Link to="/">
                    <button className="button button-stack mt-xl-5 mt-1">Go back</button>
                </Link>
            </div>
        </>
    )
}