import "./skills.css";
import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => {
        console.log("Error fetching skills:", error);
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.id}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;