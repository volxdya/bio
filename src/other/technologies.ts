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
        title: "Webpack",
        srcImg: "https://private-user-images.githubusercontent.com/143471369/326991952-402528bb-c24a-49b9-9e1a-fd2843bdc8c0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkxMTIwOTQsIm5iZiI6MTcxOTExMTc5NCwicGF0aCI6Ii8xNDM0NzEzNjkvMzI2OTkxOTUyLTQwMjUyOGJiLWMyNGEtNDliOS05ZTFhLWZkMjg0M2JkYzhjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyM1QwMzAzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzI2OWFjNDcyNDhjNzlmOGFjNDhhY2IzYzJhMDk0YWU5OTI1ZmNmYzBmZGU4ZmE1ZmIwNTg5YTRmNDRkMzk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.U97JlIoaQY55fxalqWUdaLDkgR8sPOMDwoJ02XmBXjQ",
        link: "https://webpack.js.org/",
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
        srcImg: "https://private-user-images.githubusercontent.com/143471369/326989588-3a542448-8a3a-47b0-a064-bb7121763d92.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkxMTIwOTQsIm5iZiI6MTcxOTExMTc5NCwicGF0aCI6Ii8xNDM0NzEzNjkvMzI2OTg5NTg4LTNhNTQyNDQ4LThhM2EtNDdiMC1hMDY0LWJiNzEyMTc2M2Q5Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyM1QwMzAzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZGI5NWYzZDAxNTdjNjU3MzUyNDc4MDVhOWRlMTVhZmRiZTljYzJmZTczZGJiMTc2ODQwODg4YjQ4ZDhlZWM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.zKoU8-1IXL39pIvWKnbJ-rVfE_IITw196osmcXOj-04",
        link: "https://www.postgresql.org/",
        description: "Relational DB"
    },
    {
        title: "PostgreSQL",
        srcImg: "https://private-user-images.githubusercontent.com/143471369/326989588-3a542448-8a3a-47b0-a064-bb7121763d92.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkxMTIwOTQsIm5iZiI6MTcxOTExMTc5NCwicGF0aCI6Ii8xNDM0NzEzNjkvMzI2OTg5NTg4LTNhNTQyNDQ4LThhM2EtNDdiMC1hMDY0LWJiNzEyMTc2M2Q5Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyM1QwMzAzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZGI5NWYzZDAxNTdjNjU3MzUyNDc4MDVhOWRlMTVhZmRiZTljYzJmZTczZGJiMTc2ODQwODg4YjQ4ZDhlZWM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.zKoU8-1IXL39pIvWKnbJ-rVfE_IITw196osmcXOj-04",
        link: "https://www.postgresql.org/",
        description: "Relational DB"
    },
    {
        title: "Git",
        srcImg: "https://private-user-images.githubusercontent.com/143471369/326989459-5cf6252c-b1d3-4109-a53b-e8fd21d7dfe8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkxMTIwOTQsIm5iZiI6MTcxOTExMTc5NCwicGF0aCI6Ii8xNDM0NzEzNjkvMzI2OTg5NDU5LTVjZjYyNTJjLWIxZDMtNDEwOS1hNTNiLWU4ZmQyMWQ3ZGZlOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyM1QwMzAzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZDZlODU1NDUzMmFiMzU2NmM0ZjU1ZTBmY2M0MjI3Y2JmNjkwMzZmNjliMzBiMGMzMzUwNTI4MDNmZjJhZTJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yicxvtdVwSHTjqlTibSGsjJ-Br_cQ5k8rcglamZ3dQQ",
        link: "https://git-scm.com/",
        description: "System Control Version"
    }
]