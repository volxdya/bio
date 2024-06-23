import './Stack.css';
import {Next} from "../../icons/Next.tsx";
import {Back} from "../../icons/Back.tsx";
import {useEffect, useState} from "react";
import {technologies} from "../../other/technologies.ts";
import {Soon} from "../Soon/Soon.tsx";

export function Stack() {
    const [current, setCurrent] = useState(0);
    const [time, setTime] = useState(0);

    function next() {
        if (current < technologies.length - 1) {
            setCurrent(current + 1);
        }
        if (current === technologies.length - 1) {
            setCurrent(0);
        }

        setTime(0);
    }

    function back() {
        if (current > 0) {
            setCurrent(current - 1);
        }
        if (current === 0) {
            setCurrent(technologies.length - 1);
        }

        setTime(0);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((time) => time + 10);
        }, 1000);

        if (time >= 100) {
            setTimeout(() => {
                next();

                setTime(0);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        }
    }, [time]);

    function getPadTimeZero(time: number): string {
        return time.toString().padStart(2, "0");
    }

    const newTime = getPadTimeZero(Math.floor(time / 10));

    return (
        <>
            <div className="d-flex justify-content-center mt-5">

                <div className="col-xl-5 col-11">
                    <h1 className="text-center mt-3">Stack</h1>
                    <p className="text-center dev-ops-info">When I delve deeper into studying devops, I’ll add
                        technologies that will be used in devops engineering</p>

                    <div id="carouselExample" className="carousel slide mt-5">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-center">
                                <a href={technologies[current].link} target="_blank">
                                    <img
                                        src={technologies[current].srcImg}
                                        className="item-stack"
                                        alt={technologies[current].description}
                                    />
                                </a>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev" onClick={back}>
                            <span aria-hidden="true"><Back/></span>
                            <span className="visually-hidden">Previous</span>
                        </button>


                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next" onClick={next}>
                            <span aria-hidden="true"><Next/></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <h4 className="text-center mt-5">{technologies[current].title}</h4>

                    <h5 className="stack-description text-center">{technologies[current].description}</h5>
                    <div className="mt-5 g-0">
                        <div className="row">
                            <div className="col-2">
                                <span className="time">00:{newTime}</span>

                            </div>
                            <div className="col-8">
                                <div className="progress" role="progressbar" aria-label="Example 20px high"
                                     aria-valuenow={80}
                                     aria-valuemin={0} aria-valuemax={100} style={{
                                    height: "20px"
                                }}>
                                    <div className="progress-bar" style={{
                                        width: `${time}%`
                                    }}></div>
                                </div>
                            </div>
                            <div className="col-2">
                                <span className="time">00:10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Soon/>
        </>
    );
}