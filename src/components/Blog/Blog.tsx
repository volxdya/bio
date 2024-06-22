import {Telegram} from "../../icons/Telegram.tsx";
import './Blog.css';
import {Line} from "../../icons/Line.tsx";

export function Blog() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-xl-5">
                <h1 className="text-center">Blog</h1>
                <p className="text-xl-start text-center">I have a telegram channel in which I post all my news, my life, useful materials and vibe posts</p>
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="https://t.me/dev_ops_road" target="_blank" className="blog-button">
                                <span><Telegram/></span>
                                <span className="px-2">Go To Channel</span>
                            </a>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <Line/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="container-blog-img">
                                    <img src="https://i.ibb.co/Q9d32KQ/image.png" className="blog-img" height={200}
                                         alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}