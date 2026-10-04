import "./home.css";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="home-small-text">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Siya</span>
        </h1>

        <h2>
          BCA Student & Aspiring UI/UX Designer
        </h2>

        <p className="home-description">
          I am a BCA student interested in creating simple, creative and
          user-friendly digital experiences.
        </p>

        <div className="home-buttons">
          <a href="#skills" className="primary-btn">
            View My Skills
          </a>
        </div>

      </div>

      <div className="home-decoration">
        <div className="circle"></div>
      </div>

    </section>
  );
}

export default Home;