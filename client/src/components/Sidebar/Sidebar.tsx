import React, { ReactElement } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { ReactComponent as RightToBracketSolid } from "../../assets/right-to-bracket-solid.svg";
import { SidebarProps } from "./types";

const ButtonSidebar = ({ logo, message, to = "" }) => {
  return (
    <Link to={to} className="my-1">
      <button className="flex w-full items-center rounded-lg px-2 transition-all hover:bg-[#000000] py-1 item-center">
        {logo && <span className="mx-2 w-4 h-4">{logo}</span>}
        <h3 className="ml-1">{message}</h3>
      </button>
    </Link>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  toggle,
}): ReactElement => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"} onClick={toggle}>
      <div className="bg-[#ff3b58] h-full min-w-80 flex flex-col font-roboto h-full w-full flex">
        <h1 className="px-6 mb-10 pt-8 text-xl">Logo</h1>
        <div className="flex flex-col px-6 text-lg font-semibold font-sans">
          <ButtonSidebar
            logo={
              <img src={RightToBracketSolid} alt="Right to Bracket Solid" />
            }
            message="Inicio"
            to="/login"
          />
          <ButtonSidebar
            logo={
              <img src={RightToBracketSolid} alt="Right to Bracket Solid" />
            }
            message="Sobre nosotros"
            to="/login"
          />
          <ButtonSidebar
            logo={
              <img src={RightToBracketSolid} alt="Right to Bracket Solid" />
            }
            message="Contacto"
            to="/login"
          />
        </div>
      </div>
    </div>
  );
};
