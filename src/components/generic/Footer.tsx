import React from "react";
import Social from "./Social";

export default function Footer(): JSX.Element {
  function Copyright(): JSX.Element {
    const d = new Date().getFullYear();
    const copyright = d > 2019 ? `2019-${d}` : d;
    return <div className="copyright">&copy;&nbsp;{copyright}</div>;
  }

  return (
    <footer>
      <div className="links">
        <Social icon="github" />
        <Social icon="linkedin" />
      </div>
      <Copyright />
    </footer>
  );
}
