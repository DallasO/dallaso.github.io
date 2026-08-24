import Social from "./Social";

export default function Header() {
  return (
    <header className="App-header">
      <div className="name">
        <h1 className="h4">Dallas Opelt</h1>
      </div>
      <div className="links">
        <Social icon="github" />
        <Social icon="linkedin" />
      </div>
    </header>
  );
}
