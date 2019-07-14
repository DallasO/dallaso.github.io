export interface MySkillsProps {
  title: string;
  skills: string[];
  icons: string[];
}

export const mySkills: MySkillsProps[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Typescript",
      "HTML5",
      "CSS3",
      "JavaScript",
      "AJAX",
      "jQuery"
    ],
    icons: [
      "fab fa-react",
      "fab fa-ts",
      "fab fa-html5",
      "fab fa-css3",
      "fab fa-js-square"
    ]
  },
  {
    title: "Backend",
    skills: ["Node", "Express", "PHP", "Python", "Django", "Bash"],
    icons: ["fab fa-node", "fab fa-php", "fab fa-python", "fas fa-terminal"]
  },
  {
    title: "Additional",
    skills: ["npm", "mongoDB", "SQL", "Linux", "XCart", "WordPress", "Drupal"],
    icons: ["fab fa-npm", "fab fa-linux", "fab fa-wordpress", "fab fa-drupal"]
  }
];
