import ts from '../assets/ts.png';;
import mongo from '../assets/mongo.svg';
import vite from '../assets/vite.png';
import node from '../assets/node.png';

export interface technologies {
    srcImg: string;
    title: string;
    link: string;
}

export const technologies: Array<technologies> = [
    {
        title: "React",
        srcImg: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
        link: "https://react.dev/"
    },
    {
        title: "Redux",
        srcImg: "https://www.svgrepo.com/show/303557/redux-logo.svg",
        link: "https://redux-toolkit.js.org/"
    },
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
        title: "Vue.js",
        srcImg: "https://github.com/l1agosta/l1agosta/assets/143471369/ba17cd12-a755-4746-8cd8-57be066d3225",
        link: "https://vitejs.dev/"
    },
    {
        title: "Nest.js",
        srcImg: 'https://github.com/l1agosta/l1agosta/assets/143471369/f290a2f9-03f7-47bc-bd5f-154e33b21c05',
        link: "https://expressjs.com/"
    },
    {
        title: "Next.js",
        srcImg: 'https://github.com/l1agosta/l1agosta/assets/143471369/bffa924b-d8c1-494e-8723-071d529c66b6',
        link: "https://expressjs.com/"
    },
    {
        title: "Express.js",
        srcImg: node,
        link: "https://expressjs.com/"
    },
    {
        title: "MongoDB",
        srcImg: mongo,
        link: "https://www.mongodb.com/"
    },
]