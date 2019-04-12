import React from 'react';

import Project from './Project.js';

export default () => {
  return (
    <div className="item">
      <div>
        <h2>Projects</h2>
        <p>Check out my great projects!</p>
      </div>
      <Project
        href="https://github.com/DallasO/olympic-data-visualized"
        title="The Olympic Games - Visualized"
        desc="I'm currently working on a Python/Django website where I analyze data about the Olympic Games and display the information in elegant visualizations."
      />
      <Project
        href="https://github.com/DallasO/weekly-random-reminder"
        title="Random Weekly Reminder"
        desc="A python app to remind you to take a break at random times throughout the week. Can also integrate with your Home Automation Server via MQTT."
      />
      <Project
        href="https://github.com/DallasO/ClamAV-cron-scan"
        title="ClamAV Cron"
        desc="A Bash script to scan your linux computer for viruses using ClamAV. Intended for personal computers, this script also displays notifications to the logged in user."
      />
      <Project
        href="https://github.com/DallasO/launch-all-browsers"
        title="Open Link In All Browsers"
        desc="Scripts for Windows and Linux to open a link in all installed browsers. I wrote this to help me test my web pages locally."
      />
    </div>
  );
};
