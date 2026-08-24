import Social from "./Social";
import Copyright from "./Copyright"

export default function Footer() {

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
