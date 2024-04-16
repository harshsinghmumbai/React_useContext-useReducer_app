import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-[#f0f4f9] w-full h-[5rem]  border-b-2 flex justify-between items-center">
        <div
          id="logo"
          className="bg-black text-white inline-block w-[14rem] pl-2 h-[2rem] rounded-md mx-8 "
        >
          <p className="text-xl font-bold tracking-widest font-mono">
            Thapa technical
          </p>
        </div>
        <div id="navbar" className="mx-9">
          <nav>
            <ul className="flex space-x-9 text-base font-semibold uppercase">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
