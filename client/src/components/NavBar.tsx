import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav className="p-4 flex justify-between bg-slate-900">
      <div >
        <NavBarItem label="Home" route="/" />
      </div>
      <span>Logged in as Charles</span>
      <div className="flex gap-4 ">
        <NavBarItem label="register" route="/register" />
        <NavBarItem label="login" route="/login" />
      </div>
    </nav>
  );
};

export default NavBar;
