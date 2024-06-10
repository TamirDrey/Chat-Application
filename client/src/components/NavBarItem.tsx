import React from "react";
import { Link } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  route: string;
}

const NavBarItem: React.FC<NavbarItemProps> = ({ label, route }) => {
  return (
    <Link
      to={route}
      className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
    >
      {label}{" "}
    </Link>
  );
};

export default NavBarItem;
