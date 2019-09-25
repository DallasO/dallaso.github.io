import React from "react";
import { MySkillsData as mySkills } from "./data/MySkillsData";

export default function MySkills(): JSX.Element {
  return (
    <div className="item">
      <h2>Skills</h2>
      {mySkills.map(
        (skill): JSX.Element => (
          <div key={`skill_${skill.title.split(" ").join("")}`}>
            <div className="skills">
              <h3>{skill.title}</h3>
              <div className="skill-icons">
                {skill.icons.map(
                  (icon: string): JSX.Element => (
                    <i
                      className={icon}
                      key={`skillIcon_${icon.split(" ").join("")}`}
                    />
                  )
                )}
              </div>
              <div className="skill-titles">
                {skill.skills.map(
                  (sk: string): JSX.Element => (
                    <span key={`skillSkill_${sk.split(" ").join("")}`}>
                      {sk}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
