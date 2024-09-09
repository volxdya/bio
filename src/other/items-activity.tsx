import { CodeIcon } from "../icons/Code.tsx";
import { Paint } from "../icons/Paint.tsx";

export interface IActivity {
    text: string;
    title: string;
    component: JSX.Element;
}

export const activity: IActivity[] = [
    {
        text: "This is my main activity. 2+ years of web application development experience",
        title: "FullStack Development",
        component: <CodeIcon />
    },
    {
        text: "This is my non-core activity, I studied it at a basic level to make it easier to write in the project",
        title: "Web design",
        component: <Paint />
    }
]