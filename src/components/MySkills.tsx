import React from "react";
import { MySkillsData as mySkills } from "./data/MySkillsData";

export default function MySkills(): JSX.Element {
  return (
    <div className="item">
      <h2>Skills</h2>
      {mySkills &&
        mySkills.map(
          (skill, skillInd): JSX.Element => (
            <div key={"skill_" + skillInd}>
              <div className="skills">
                <h3>{skill.title}</h3>
                <div className="skill-icons">
                  {skill.icons.map(
                    (icon: string, skillIconInd): JSX.Element => (
                      <i className={icon} key={"skillIcon_" + skillIconInd}></i>
                    )
                  )}
                </div>
                <div className="skill-titles">
                  {skill.skills.map(
                    (sk: string, skillSkillInd): JSX.Element => (
                      <span key={"skillSkill_" + skillSkillInd}>{sk}</span>
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
