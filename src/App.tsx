import './main.global.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Suspense, lazy} from 'react';
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";

function App() {
    const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));

    return (
        <Suspense fallback={<div/>}>
            <BrowserRouter basename='/bio/'>
                <div className="w-100 px-xl-5 mt-xl-5">
                    <div className="row g-0">
                        <Sidebar/>
                        <Routes>
                            <Route path="/" element={<LazyMainPage/>}/>
                            <Route path="/stack" element={<LazyMainPage/>}/>
                            <Route path="/blog" element={<LazyMainPage/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;