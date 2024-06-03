import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  route: string;
}

const NavBarItem: React.FC<NavbarItemProps> = ({ label, route }) => {
  const navigate = useNavigate();

  const moveToRoute = () => {
    navigate(route);
  };

  return (
    <div
      className="text-gray-200 hover:text-gray-300 cursor-pointer transition"
      onClick={moveToRoute}
    >
      {label}
    </div>
  );
};

export default NavBarItem;
