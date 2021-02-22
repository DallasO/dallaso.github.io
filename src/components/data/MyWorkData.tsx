import React from "react";
import cannabinder from "../../img/cannabinder.png";
import crucibleBrewing from "../../img/crucible-brewing.png";
import fluke from "../../img/fluke.png";
import iittala from "../../img/iittala.png";
import IittalaLogo from "../../img/iittala-logo.svg";
import wamal from "../../img/wamal.png";

export interface MyWorkProps {
  link: string;
  title: string | JSX.Element;
  description: string[];
  image: string;
  alt?: string;
}

export const MyWorkData: MyWorkProps[] = [
  {
    link: "https://www.Cannabinder.com",
    title: "Cannabinder",
    description: [
      "Currently helping a startup bring a new marketing platform to market. This project is a public API powered by Node, Express, and MongoDB, as well as a frontend webapp powered by React and Typescript."
    ],
    image: cannabinder
  },
  {
    link: "https://www.fluke.com/en-us",
    title: "Fluke",
    description: [
      "Worked directly with the marketing department for a Fortune 500 company, to create landing pages, emails, and online content for a global website. Managed content and translations to create responsive modern HTML. Used JavaScript, jQuery, and API's for marketing automation, tracking, and advanced user interactions."
    ],
    image: fluke
  },
  {
    link: "https://iittala.com.au",
    title: (
      <img src={IittalaLogo} alt="Iittala" className="img-responsive logo" />
    ),
    description: [
      "Completely rethemed the frontend as specified by a designer.",
      "Cleaned up unused CSS from older themes. Integrated with existing XCart API for easy future updates."
    ],
    image: iittala,
    alt: "Iittala"
  },
  {
    link: "https://cruciblebrewing.com",
    title: "Crucible Brewing",
    description: [
      "Helped a local business increase web and foot traffic by upgrading their website, while making it easier to maintain.",
      "Installed WordPress, customized a theme, and added JS API call to load a menu that's always up to date."
    ],
    image: crucibleBrewing
  },
  {
    link: "https://wamal.rescuegroups.org",
    title: "WAMAL Malamute Rescue",
    description: [
      "Volunteered my time to a local rescue group to help set up a new website. The site is hosted on a very limited platform, so there isn't a lot to customize. I mostly helped with theming, and setting guidelines for how content should be written.",
      "I also installed affiliate and social links for donations and spreading the word."
    ],
    image: wamal,
    alt: "Washington Alaskan Malamute Adoption League (WAMAL)"
  }
];

export default MyWorkData;
