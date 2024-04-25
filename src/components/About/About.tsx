import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <div className="text-center main-info">
                <p className="main-title">About me</p>
                <p className="other-title text-center mx-4 me-4 mt-3">My name is Vladimir, I am 16 years old, fullstack developer from Bashkortostan. I have been programming since I was 13 years old. Experience in developing complex web applications about 1.5 years. Wrote such pet projects as: online store, social network, reddit mirror. I like traveling, walking, spending time with my relatives</p>
            </div>
            <div className="container-btns">
                <Link to="/">
                    <button className="button mt-2">Go back</button>
                </Link>
            </div>
        </>
    );
}