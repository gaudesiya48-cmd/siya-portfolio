import "./education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="education-item">
        <span>2024 - Present</span>

        <div>
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>GVM's GGPR College,Farmagudi Ponda Goa</p>
          <p>
            Currently pursuing my Bachelor's degree with an interest in
            technology, design and web development.
          </p>
        </div>
      </div>

      <div className="education-item">
        <span>Higher Secondary</span>

        <div>
          <h3>Commerce</h3>
          <p>Ponda Education Society, Farmagudi Ponda Goa</p>
        </div>
      </div>
    </section>
  );
}

export default Education;