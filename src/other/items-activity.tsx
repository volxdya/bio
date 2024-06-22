import {CodeIcon} from "../icons/Code.tsx";
import {DevOps} from "../icons/Infinity.tsx";
import {Paint} from "../icons/Paint.tsx";

export interface IActivity {
    text: string;
    title: string;
    component: JSX.Element;
}

export const activity: IActivity[] = [
    {
        text: "This is my main activity. 2+ years of web application development experience",
        title: "FullStack Development",
        component: <CodeIcon/>
    },
    {
        text: "This is my hobby, I started studying it recently, but I really want to go deeper",
        title: "DevOps engineering",
        component: <DevOps/>
    },
    {
        text: "This is my non-core activity, I studied it at a basic level to make it easier to write in the project",
        title: "Web design",
        component: <Paint/>
    }
]