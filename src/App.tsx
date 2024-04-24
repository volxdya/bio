import './main.global.css';

function App() {

  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="w-100 d-flex justify-content-center">
          <div className="w-100">
            <div>
              <img
                className="banner"
                src="https://img.freepik.com/free-photo/adorable-looking-kitten-with-yarn_23-2150886292.jpg"
                alt="banner" />
            </div>
            <div className="text-center">
              <img
                className="avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsKhN2hQT05yp8xnMRkT85FEg3H9t7EAqHi0B2VJInA&s"
                alt="avatar" />
            </div>
            <div className="text-center main-info">
              <p className="full-name">Vladimir</p>
              <p className="job-title">16y.o FullStack developer</p>
            </div>
            <div className="container-btns">
              <button className="button">About me</button>
              <button className="button mt-2">Stack</button>
            </div>
            <p className="text-center">©lagosta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;