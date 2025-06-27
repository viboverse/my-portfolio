import logo from "../assets/logo-transparent.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} />
      <h1>React Movie API</h1>
    </header>
  );
}
