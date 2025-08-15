import logo from "../assets/movie API-logo.png";

export default function Header() {
   return (
      <header className="border-camarone-300 flex h-18 items-center border-b bg-gradient-to-r from-neutral-800 to-neutral-900 px-12 shadow-md">
         <a href="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
         </a>

         <h1 className="flex-1 text-center text-3xl text-green-500">
            React Movie API
         </h1>
      </header>
   );
}
