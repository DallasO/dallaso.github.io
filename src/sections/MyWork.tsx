import React from "react";

import cannabinder from "../img/cannabinder.png";
import crucibleBrewing from "../img/crucible-brewing.png";
import fluke from "../img/fluke.png";
import iittala from "../img/iittala.png";
import IittalaLogo from "../img/iittala-logo.svg";
import wamal from "../img/wamal.png";

export default function MyWork(): JSX.Element {
  return (
    <div className="item large">
      <div>
        <h2>Experience</h2>
        <p>Check out some of my work!</p>
      </div>
      <div className="showcase">
        <a
          href="https://www.Cannabinder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Cannabinder</h3>
        </a>
        <p>
          {
            "Currently helping a startup bring a new marketing platform to market. This project is a public API powered by Node, Express, and MongoDB, as well as a frontend webapp powered by React and Typescript."
          }
        </p>
        <a
          href="https://www.Cannabinder.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={cannabinder}
            alt="Cannabinder"
            className="img-responsive screengrab"
          />
        </a>
      </div>
      <div className="showcase">
        <a
          href="https://www.fluke.com/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Fluke</h3>
        </a>
        <p>
          {
            "Worked directly with the marketing department for a Fortune 500 company, to create landing pages, emails, and online content for a global website. Managed content and translations to create responsive modern HTML. Used JavaScript, jQuery, and API's for marketing automation, tracking, and advanced user interactions."
          }
        </p>
        <a
          href="https://www.fluke.com/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={fluke}
            alt="Fluke Corporation"
            className="img-responsive screengrab"
          />
        </a>
      </div>
      <div className="showcase">
        <a
          href="https://iittala.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={IittalaLogo}
            alt="Iittala"
            className="img-responsive logo"
          />
        </a>
        <p>
          {
            "Completely redesigned and custom coded the frontend. From the header to the footer, and the homepage to the checkout, almost everything you see was coded by me."
          }
        </p>
        <p>
          {
            "Cleaned up unused CSS from older themes. Integrated with existing XCart AJAX logic for easy future updates."
          }
        </p>
        <a
          href="https://iittala.com.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={iittala}
            alt="Iittala"
            className="img-responsive screengrab"
          />
        </a>
      </div>
      <div className="showcase">
        <a
          href="https://cruciblebrewing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Crucible Brewing</h3>
        </a>
        <p>
          {
            "Helped a local business increase web and foot traffic by upgrading their website, while making it easier to maintain."
          }
        </p>
        <p>
          {
            "Installed WordPress and customized a theme to be mobile responsive. Added "
          }
          <a
            href="https://cruciblebrewing.com/index.php/our-beer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"JS API call"}
          </a>
          {" to load a menu that's always up to date."}
        </p>
        <a
          href="https://cruciblebrewing.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={crucibleBrewing}
            alt="Crucible Brewing"
            className="img-responsive screengrab"
          />
        </a>
      </div>
      <div className="showcase">
        <a
          href="https://wamal.rescuegroups.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>WALMAL Malamute Rescue</h3>
        </a>
        <p>
          {
            "Volunteered my time to a local rescue group to help set up a new website. The site is hosted on a very limited platform, so there isn't a lot to customize. I mostly helped with theming, and setting guidelines for how content should be writtin."
          }
        </p>
        <p>
          {
            "I also installed affiliate and social links for donations and spreading the word."
          }
        </p>
        <a
          href="https://wamal.rescuegroups.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={wamal}
            alt="Washington Alaskan Malamute Adoption League (WAMAL)"
            className="img-responsive screengrab"
          />
        </a>
      </div>
    </div>
  );
}
