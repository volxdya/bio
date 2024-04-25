import './Stack.css';
import { databases, frameworks, plangs, programs } from "../../other/technologies";
import { Card } from "../Card/Card";
import { Link } from 'react-router-dom';

export default function Stack() {
    return (
        <>
            <div className="text-center main-info">
                <p className="main-title">Stack</p>
            </div>
            <div className="mx-2 me-2 wrapper-all-techonologies">

                <div className="row">
                    {plangs.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                link={item.link}
                                srcImg={item.srcImg}
                            />
                        )
                    })}
                </div>

                <div className="row mt-3">
                    {frameworks.map((item) => {
                        return (
                            <Card
                                link={item.link}
                                title={item.title}
                                srcImg={item.srcImg}
                            />
                        )
                    })}
                </div>


                <div className="row mt-3">
                    {databases.map((item) => {
                        return (
                            <Card
                                link={item.link}
                                title={item.title}
                                srcImg={item.srcImg}
                            />
                        )
                    })}
                </div>

                <div className="row mt-3">
                    {programs.map((item) => {
                        return (
                            <Card
                                link={item.link}
                                title={item.title}
                                srcImg={item.srcImg}
                            />
                        )
                    })}
                </div>
                <div className="container-btns mt-4">
                    <Link to="/">
                        <button className="button button-stack mt-3">Go back</button>
                    </Link>
                </div>
            </div>

        </>
    )
}