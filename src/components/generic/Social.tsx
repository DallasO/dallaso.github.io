import React from "react";

export interface SocialIconProps {
  icon: "github" | "linkedin";
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
          <i className="fab fa-github" />
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
          <i className="fab fa-linkedin" />
        </a>
      );
    default:
      return null;
  }
}
