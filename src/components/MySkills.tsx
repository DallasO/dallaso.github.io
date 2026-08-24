import { MySkillsData as mySkills } from "./data/MySkillsData";

export default function MySkills() {
  return (
    <div className="item">
      <h2>Skills</h2>
      {mySkills.map(
        (skill) => (
          <div key={`skill_${skill.title.split(" ").join("")}`}>
            <h3>{skill.title}</h3>
            <div className="skills">
              {skill.skills.map(({ skill, icon, iconClass }) => (
                <div className="skill" key={skill}>
                  {iconClass && <i className={iconClass} />}
                  {icon && <img className="skillIcon" src={icon} alt={skill} />}
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
