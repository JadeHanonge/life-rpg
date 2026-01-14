import { useState } from "react";
import { skillsLibrary } from "../data/skillsLibrary";
import './SkillsList.css'

export default function SkillsList() {

  const [skills] = useState((skillsLibrary))

  return (
    <div className="card">
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill.id} className="skill-item">
            <button className="skill-button">{skill.name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
