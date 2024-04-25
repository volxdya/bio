import './main.global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Suspense, lazy } from 'react';

function App() {
  const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));
  const LazyAbout = lazy(() => import('./components/About/About'));
  const LazyStack = lazy(() => import('./components/Stack/Stack'));

  return (
    <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter basename='/bio/'>
      <div className="wrapper">
        <div className="main-container">
          <div className="w-100 d-flex justify-content-center">
            <div className="w-100">

              <Header />

              <Routes>
                <Route path="/" element={<LazyMainPage />} />
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/stack" element={<LazyStack />} />
              </Routes>

            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </Suspense>
  )
}

export default App;