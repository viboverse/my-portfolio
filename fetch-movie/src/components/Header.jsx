import logo from "../assets/logo-transparent.png";

export default function Header() {
  return (
    <header className="header">
      <a href="">
        <img src={logo} />
      </a>
      <h1>React Movie API</h1>
    </header>
  );
}
