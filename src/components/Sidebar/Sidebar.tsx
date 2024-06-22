import'./Sidebar.css';
import {HeaderCard} from "../HeaderCard/HeaderCard.tsx";
import {ISidebar, itemsSidebar} from "../../other/items-sidebar.tsx";
import uniqid from 'uniqid';
import {Header} from "../Header/Header.tsx";

export function Sidebar() {

    return (
        <div className="col-xl-2 mx-xl-5 sidebar p-xl-4 mt-xl-2">
            <div className="mb-5">
                <div className="d-flex justify-content-center">
                    <img className="avatar mt-4"
                         src="https://i.pinimg.com/564x/6a/86/0f/6a860f4d5e456ec5c0ee814966ee7695.jpg"
                         alt="avatar" height={125} width={125}/>
                </div>
                <h3 className="mt-4 text-center nickname">liagosta</h3>
                <div className="text-center me mt-4 activity-sidebar">Fullstack / DevOps</div>
                <div className="line mt-4"></div>
                <div className="mt-4">
                    {itemsSidebar.map((item: ISidebar) => {
                        return (
                            <HeaderCard title={item.title} preTitle={item.preTitle} link={item.link} component={item.component} key={uniqid()}/>
                        )
                    })}
                </div>
            </div>
            <div className="d-xl-none d-block">
                <Header/>
            </div>
        </div>
    );
}