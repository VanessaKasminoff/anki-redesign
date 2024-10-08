import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import FeatureCard from "./components/FeatureCard";
import data from "./assets/data/features-data.json";

function App() {
  return (
    <div id="app">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-img-container">
            <img
              className="hero-img"
              src="/images/Anki-icon.png"
              alt="Placeholder image"
            />
          </div>
          <div className="hero-desc-container">
            <h1>
              <span className="orange-color">Powerful</span>, intelligent flash
              cards
            </h1>
            <h2>
              Remembering things just became{" "}
              <span className="orange-color">easier</span>
            </h2>
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
      <section className="features-section">
        <div className="features-content">
          {data.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                title={feature.title}
                image={feature.image}
                description={feature.description}
              />
            );
          })}
        </div>
      </section>
      <section className="about-section">
        <h2>
          <div>Remember</div>
          <div className="inner-about-words">
            <span>
              Anything <br />
              Anywhere <br />
              Effeciently <br />
            </span>
          </div>
        </h2>
        <div className="about-expanded-container">
          <div className="features-expanded">
            <div className="features-expanded-card card-1">
              <img src="https://placehold.co/600x400"/>
              <h2>Lorem Ipsum</h2>
              <p>Egestas magna id rhoncus torquent sem condimentum a suspendisse. Iaculis curabitur ullamcorper convallis erat metus netus. Urna maximus sed turpis, suspendisse lobortis lacinia. Tempor lacus inceptos placerat risus inceptos nec ornare. </p>
            </div>
            <div className="features-expanded-card card-2">
              <img src="https://placehold.co/600x400"/>
              <h2>Lorem Ipsum</h2>
              <p>Egestas magna id rhoncus torquent sem condimentum a suspendisse. Iaculis curabitur ullamcorper convallis erat metus netus. Urna maximus sed turpis, suspendisse lobortis lacinia. Tempor lacus inceptos placerat risus inceptos nec ornare. </p>
            </div>
            <div className="features-expanded-card card-3">
              <img src="https://placehold.co/600x400"/>
              <h2>Lorem Ipsum</h2>
              <p>Egestas magna id rhoncus torquent sem condimentum a suspendisse. Iaculis curabitur ullamcorper convallis erat metus netus. Urna maximus sed turpis, suspendisse lobortis lacinia. Tempor lacus inceptos placerat risus inceptos nec ornare. </p>
            </div>
            <div className="features-expanded-card card-4">
              <img src="https://placehold.co/600x400"/>
              <h2>Lorem Ipsum</h2>
              <p>Egestas magna id rhoncus torquent sem condimentum a suspendisse. Iaculis curabitur ullamcorper convallis erat metus netus. Urna maximus sed turpis, suspendisse lobortis lacinia. Tempor lacus inceptos placerat risus inceptos nec ornare. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
