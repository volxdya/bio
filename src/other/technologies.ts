import ts from '../assets/ts.png';;
import node from '../assets/node.png';
import mongo from '../assets/mongo.svg';
import vite from '../assets/vite.png';

export interface technologies {
    srcImg: string;
    title: string;
    link: string;
}

export const technologies: Array<technologies> = [
    {
        title: "TypeScript",
        srcImg: ts,
        link: "https://www.typescriptlang.org/"
    },
    {
        title: "Vite",
        srcImg: vite,
        link: "https://vitejs.dev/"
    },
    {
        title: "Redux",
        srcImg: "https://www.svgrepo.com/show/303557/redux-logo.svg",
        link: "https://redux-toolkit.js.org/"
    },
    {
        title: "MongoDB",
        srcImg: mongo,
        link: "https://www.mongodb.com/"
    },
    {
        title: "React",
        srcImg: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
        link: "https://react.dev/"
    },
    {
        title: "Express",
        srcImg: node,
        link: "https://expressjs.com/"
    },
]