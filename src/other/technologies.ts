import ts from '../assets/ts.png';
import mongo from '../assets/mongo.svg';
import vite from '../assets/vite.png';
import node from '../assets/node.png';

export interface technologies {
    srcImg: string;
    title: string;
    link: string;
    description?: string;
}

export const technologies: Array<technologies> = [
    {
        title: "React",
        srcImg: "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
        link: "https://react.dev/",
        description: "Frontend Framework"
    },
    {
        title: "Redux",
        srcImg: "https://www.svgrepo.com/show/303557/redux-logo.svg",
        link: "https://redux-toolkit.js.org/",
        description: "Frontend State Manager"
    },
    {
        title: "TypeScript",
        srcImg: ts,
        link: "https://www.typescriptlang.org/",
        description: "Programming Language"
    },
    {
        title: "Python",
        srcImg: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
        link: "https://www.python.org/",
        description: "Programming Language"
    },
    {
        title: "Vite",
        srcImg: vite,
        link: "https://vitejs.dev/",
        description: "Builder Frontend"
    },
    {
        title: "Vue.js",
        srcImg: "https://github.com/l1agosta/l1agosta/assets/143471369/ba17cd12-a755-4746-8cd8-57be066d3225",
        link: "https://ru.vuejs.org/",
        description: "Frontend Framework"
    },
    {
        title: "Nest.js",
        srcImg: 'https://github.com/l1agosta/l1agosta/assets/143471369/f290a2f9-03f7-47bc-bd5f-154e33b21c05',
        link: "https://docs.nestjs.com/",
        description: "Backend Framework"
    },
    {
        title: "Next.js",
        srcImg: 'https://github.com/l1agosta/l1agosta/assets/143471369/bffa924b-d8c1-494e-8723-071d529c66b6',
        link: "https://nextjs.org/",
        description: "Frontend Server Framework"
    },
    {
        title: "Express.js",
        srcImg: node,
        link: "https://expressjs.com/",
        description: "Backend Framework"
    },
    {
        title: "MongoDB",
        srcImg: mongo,
        link: "https://www.mongodb.com/",
        description: "Not Relational DB"
    },
    {
        title: "PostgreSQL",
        srcImg: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
        link: "https://www.postgresql.org/",
        description: "Relational DB"
    },
    {
        title: "Git",
        srcImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
        link: "https://git-scm.com/",
        description: "System Control Version"
    }
]