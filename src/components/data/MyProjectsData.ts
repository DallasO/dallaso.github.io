export interface MyProjectsProps {
  title: string;
  desc: string;
  href: string;
}

export const MyProjectsData: MyProjectsProps[] = [
  {
    title: "My Portfolio",
    desc:
      "You are currently viewing my portfolio, which is built with React and Typescript and is hosted on GitHub.",
    href: "https://github.com/DallasO/dallaso.github.io/tree/next/src"
  },
  {
    title: "The Olympic Games - Visualized",
    desc:
      "I'm currently working on a Python/Django website where I analyze data about the Olympic Games and display the information in elegant visualizations.",
    href: "https://github.com/DallasO/olympic-data-visualized"
  },
  {
    title: "Random Weekly Reminder",
    desc:
      "A python app to remind you to take a break at random times throughout the week. Can also integrate with your Home Automation Server via MQTT.",
    href: "https://github.com/DallasO/weekly-random-reminder"
  },
  {
    title: "ClamAV Cron",
    desc:
      "A Bash script to scan your linux computer for viruses using ClamAV. Intended for personal computers, this script also displays notifications to the logged in user.",
    href: "https://github.com/DallasO/ClamAV-cron-scan"
  },
  {
    title: "Open Link In All Browsers",
    desc:
      "Scripts for Windows and Linux to open a link in all installed browsers. I wrote this to help me test my web pages locally.",
    href: "https://github.com/DallasO/launch-all-browsers"
  }
];

export default MyProjectsData;
