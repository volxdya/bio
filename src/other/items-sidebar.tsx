import {Telegram} from "../icons/Telegram.tsx";
import {GitHub} from "../icons/GitHub.tsx";
import {LocationIcon} from "../icons/Location.tsx";

export interface ISidebar {
    preTitle: string;
    component: React.ReactNode;
    link: string;
    title: string;
}

export const itemsSidebar: ISidebar[] = [
    {
        preTitle: "Telegram",
        component: <Telegram/>,
        link: "https://t.me/vl7dimir",
        title: "@volxdya"
    },
    {
        preTitle: "GitHub",
        component: <GitHub/>,
        link: "https://github.com/volxdya/",
        title: "@volxdya"
    },
    {
        preTitle: "Location",
        component: <LocationIcon/>,
        link: "https://www.google.com/maps/place/%D0%A3%D1%84%D0%B0,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD/@54.7408961,55.6908067,10z/data=!3m1!4b1!4m6!3m5!1s0x43d93a259216bce1:0xaceec0921eda92cc!8m2!3d54.734791!4d55.9578555!16zL20vMDF2amc2?entry=ttu",
        title: "Russia, Ufa"
    }
];