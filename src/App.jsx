import "./assets/css/style.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-img-container">
            <img src="https://placehold.co/600x400" alt="Placeholder image" />
          </div>
          <div className="hero-desc-container">
            <h1><span className="orange-color">Powerful</span>, intelligent flash cards</h1>
            <h2>Remembering things just became <span className="orange-color">easier</span></h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
              </svg>
              Download
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
