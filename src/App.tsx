import './main.global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './components/Loader/Loader.tsx';

function App() {
    const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));

    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter basename='/bio/'>
                <div className='wrapper' />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<LazyMainPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;