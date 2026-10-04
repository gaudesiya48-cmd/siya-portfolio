import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a BCA student with an interest in technology, design and
            creating user-friendly digital experiences.
          </p>

          <p>
            I enjoy learning new technologies and working on practical
            projects that help me improve my technical and creative skills.
          </p>

          <p>
            My current interests include UI/UX design, web development and
            data analytics.
          </p>
        </div>

        <div className="about-info">
          <div>
            <span>Name</span>
            <strong>Siya</strong>
          </div>

          <div>
            <span>Course</span>
            <strong>BCA</strong>
          </div>

          <div>
            <span>Interest</span>
            <strong>UI/UX & Web Design</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;