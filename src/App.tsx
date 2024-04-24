import './main.global.css';
import { MainPage } from './components/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="main-container">
          <div className="w-100 d-flex justify-content-center">
            <div className="w-100">
        
              <Header />

              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>

              <p className="text-center">©lagosta</p>
              
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;