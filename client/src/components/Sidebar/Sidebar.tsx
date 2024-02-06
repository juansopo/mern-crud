import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { SideBarButtonProps, SideBarProps } from "./types";

const sidebarStyle = "w-64 h-screen bg-[#1c1917] flex flex-col items-center";
const logoStyle = "w-10 h-10 mt-4";
const buttonStyle =
  "flex w-48 h-10 mt-4 rounded-xl border border-transparent border-2 hover:border-2 hover:border-[#e11d48] text-lg items-center ";
const activeStyle = "bg-[#e11d48]";
const subOptionStyle = "ml-4"; // Ajusta el estilo para las subopciones

function SideBarButton({
  option,
  onClick,
  active,
  icon,
  children,
}: React.PropsWithChildren<SideBarButtonProps>): JSX.Element {
  const isSubOption = !!children;

  return (
    <div className={isSubOption ? subOptionStyle : ""}>
      <Link
        to={option.link}
        key={option.title}
        className={`${buttonStyle} ${active === option.title ? activeStyle : ""}`}
        onClick={onClick}
      >
        {icon && <span className="pl-2">{icon}</span>}
        <h4 className="pl-2">{option.title}</h4>
      </Link>
      {children}
    </div>
  );
}

const RecursiveSubOptions: React.FC<SideBarButtonProps> = ({
  option,
  onClick,
  active,
}: SideBarButtonProps) => (
  <>
    {option.subOptions &&
      option.subOptions.map((subOption) => (
        <SideBarButton
          key={subOption.title}
          option={subOption}
          onClick={onClick}
          active={active}
          icon={subOption.icon}
        >
          <RecursiveSubOptions
            option={subOption}
            onClick={onClick}
            active={active}
          />
        </SideBarButton>
      ))}
  </>
);

const SideBar: React.FC<SideBarProps> = ({ options }) => {
  const [active, setActive] = React.useState<string>("");

  const handleClick = (option: string) => {
    setActive((prevActive) => (prevActive === option ? "" : option));
  };

  return (
    <div className={sidebarStyle}>
      <FaRegUserCircle className={logoStyle} />
      {options.map((option) => (
        <React.Fragment key={option.title}>
          <SideBarButton
            option={option}
            onClick={() => handleClick(option.title)}
            active={active}
            icon={option.icon}
          >
            <RecursiveSubOptions
              option={option}
              onClick={() => handleClick(option.title)}
              active={active}
            />
          </SideBarButton>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
