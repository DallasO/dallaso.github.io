import Gatsby from "../../img/Gatsby-Logo.svg";
import Typescript from "../../img/Typescript-Logo.svg";
import Unity3D from "../../img/Unity3D-Logo.svg";

export interface MySkillsProps {
  icons?: any;
  title: string;
  skills: {
    skill: string;
    iconClass?: string;
    icon?: string;
  }[];
}

export const MySkillsData: MySkillsProps[] = [
  {
    title: "Frontend",
    skills: [
      {
        skill: "React",
        iconClass: "fab fa-react"
      },
      {
        skill: "Gatsby",
        icon: Gatsby
      },
      {
        skill: "Typescript",
        icon: Typescript
      },
      {
        skill: "HTML5",
        iconClass: "fab fa-html5"
      },
      {
        skill: "CSS3",
        iconClass: "fab fa-css3"
      },
      {
        skill: "JavaScript",
        iconClass: "fab fa-js-square"
      }
    ]
  },
  {
    title: "Backend",
    skills: [
      { skill: "Node", iconClass: "fab fa-node" },
      { skill: "Express" },
      { skill: "Python", iconClass: "fab fa-python" },
      { skill: "Bash", iconClass: "fas fa-terminal" },
      { skill: "PHP", iconClass: "fab fa-php" },
      { skill: "Django" }
    ]
  },
  {
    title: "Other",
    skills: [
      { skill: "Unity3D", icon: Unity3D },
      { skill: "npm", iconClass: "fab fa-npm" },
      { skill: "mongoDB" },
      { skill: "SQL" },
      { skill: "Linux", iconClass: "fab fa-linux" },
      { skill: "Postman" },
      { skill: "WordPress", iconClass: "fab fa-wordpress" }
    ]
  }
];

export default MySkillsData;
