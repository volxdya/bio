import {activity, IActivity} from "../../other/items-activity.tsx";
import {ActivityCard} from "../ActivityCard/ActivityCard.tsx";
import uniqid from "uniqid";
import {ISkills, skills} from "../../other/items-skills.ts";
import {Skills} from "../Skills/Skills.tsx";
import './About.css';

export function About() {
    return (
        <div className="p-5">
            <h2 className="text-xl-start text-center">About me</h2>
            <p className="py-3 text-about text-xl-start text-center">
                My name is Vladimir, I’m 16 years old, a full stack developer from Bashkortostan. I've been
                programming since I was 13 years old.
                About 1.5 years of experience in developing complex web applications. Wrote such favorite
                projects as: an online store, a social network, a Reddit mirror, a platform for searching films.
                <br/>

                Just recently I found my new hobby - devops engineering, perhaps in the future this will be my
                main activity

                <br/>
                I love to travel, walk, spend time with relatives
            </p>
            <h2 className="text-xl-start text-center">My main activity</h2>
            <div className="mt-5">
                <div className="d-flex gap-4 flex-wrap justify-content-between">
                    {activity.map((item: IActivity) => {
                        return <ActivityCard title={item.title} text={item.text} component={item.component}
                                             key={uniqid()}/>
                    })}
                </div>
            </div>

            <h2 className="mt-5 text-xl-start text-center">Skills</h2>
            <div className="d-flex justify-content-between flex-wrap">
                {skills.map((item: ISkills) => {
                    return <Skills title={item.title} progress={item.progress} key={uniqid()}/>
                })}
            </div>
        </div>
    );
}