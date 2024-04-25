import ts from '../assets/ts.png';
import java from '../assets/Java.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.svg';
import psql from '../assets/psql.png';
import vscode from '../assets/vscode.png';
import ws from '../assets/ws.png';
import ij from '../assets/ij.png';
import figma from '../assets/figma.webp';

export interface technologies {
    srcImg: string;
    title: string;
    link: string;
}

export const plangs: Array<technologies> = [
    {
        title: "TypeScript",
        srcImg: ts,
        link: "https://www.typescriptlang.org/"
    },
    {
        title: "Java",
        srcImg: java,
        link: "https://www.java.com/"
    },
    {
        title: "Python",
        srcImg: python,
        link: "https://www.python.org/"
    },
];

export const frameworks: Array<technologies> = [
    {
        title: "React",
        srcImg: react,
        link: "https://react.dev/"
    },
    {
        title: "Vue.js",
        srcImg: vue,
        link: "https://vuejs.org/"
    },
    {
        title: "Express Node.js",
        srcImg: node,
        link: "https://expressjs.com/"
    },
];

export const databases: Array<technologies> = [
    {
        title: "MongoDB",
        srcImg: mongo,
        link: "https://www.mongodb.com/"
    },
    {
        title: "PostgreSQL",
        srcImg: psql,
        link: "https://www.postgresql.org/"
    },
];

export const programs: Array<technologies> = [
    {
        title: "VS Code",
        srcImg: vscode,
        link: "https://code.visualstudio.com/"
    },
    {
        title: "WebShtorm",
        srcImg: ws,
        link: "https://www.jetbrains.com/webstorm/"
    },
    {
        title: "IntelliJ IDEA",
        srcImg: ij,
        link: "https://www.jetbrains.com/idea/"
    },
    {
        title: "Figma",
        srcImg: figma,
        link: "https://www.figma.com/"
    },
];