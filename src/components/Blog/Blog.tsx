import './Blog.css';
import { Line } from '../../icons/Line.tsx';
import { Telegram } from '../../icons/Telegram.tsx';

export function Blog() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-xl-5">
                <h1 className="text-center">Blog</h1>
                <p className="text-center description-tg">I have a telegram channel in which I post different posts without meaning</p>
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="https://t.me/ielwkcjamnebkal" target="_blank" className="blog-button">
                                <span><Telegram /></span>
                                <span className="px-2">Go To Channel</span>
                            </a>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <Line />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="container-blog-img">
                                    <img src="https://i.ibb.co/nfGxm3z/image.png" className="blog-img" height={200}
                                        alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <Soon
                    text="Soon"
                    other="I had a telegram channel, but I have closed it so far"
                /> */}
            </div>
        </div>
    );
}