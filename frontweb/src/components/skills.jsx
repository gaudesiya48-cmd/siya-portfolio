import "./skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "Figma",
    "Data Analytics"
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;