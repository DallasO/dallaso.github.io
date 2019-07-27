import React from "react";

export interface SocialIconProps {
  icon: "github" | "linkedin" | "hackerrank";
  link?: string;
}

export default function Social(props: SocialIconProps): JSX.Element | null {
  const { link } = props;
  switch (props.icon) {
    case "github":
      return (
        <a
          className="social-link"
          href={link || "https://github.com/DallasO"}
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      );
    case "linkedin":
      return (
        <a
          className="social-link"
          href={link || "https://www.linkedin.com/in/dallasopelt/"}
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      );
    case "hackerrank":
      return (
        <a
          className="social-link"
          href={link || "https://www.hackerrank.com/opeltd/"}
          rel="noopener noreferrer"
          target="_blank"
          title="HackerRank"
        >
          <i className="fab fa-hackerrank"></i>
        </a>
      );
    default:
      return null;
  }
}
