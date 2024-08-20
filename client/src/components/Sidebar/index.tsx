import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { Option, SideBarButtonProps, SideBarProps } from "./types";
import { FaArrowRight } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";


const sidebarStyle = "w-64 h-screen bg-[#1c1917] flex flex-col pl-4";
const logoStyle = "w-8 h-8 mt-4";
const buttonStyle =
  "flex flex-row justify-start w-52 h-8 mt-4 rounded-xl border border-transparent border-2 hover:border-2 hover:border-[#e11d48] text-md items-center antialiased transition-colors duration-300 ease-in-out";
const activeStyle = "bg-[#e11d48]";
const subOptionStyle = "ml-2";

function SideBarButton({
  option,
  onClick,
  isActive,
  icon,
  children,
  className,
}: React.PropsWithChildren<SideBarButtonProps>): ReactElement {
  const location = useLocation();

  return (
    <div>
      <Link
        to={option?.link ?? location.pathname}
        key={option.title}
        className={`${buttonStyle} ${
          option?.link === location.pathname ? activeStyle : ""
        } ${className}`}
        onClick={onClick}
      >
        {icon && <span className="pl-2">{icon}</span>}
        <h4 className="">{option.title}</h4>
        {option.subOptions && option.subOptions.length > 0 && (
          <FaArrowRight
            className={`h-4 w-3 ml-auto duration-300 mr-2 ${
              isActive ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>
      {children}
    </div>
  );
}

const RecursiveSubOptions: React.FC<SideBarButtonProps> = ({
  option,
  isActive,
}: SideBarButtonProps) => {
  const location = useLocation();
  
  return (
    <div>
      {option.subOptions && (
        <div
          className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
            isActive ? "max-h-screen" : "max-h-0"
          }`}
        >
          {option.subOptions.map((subOption) => (
            <div
              key={subOption.title}
              className={`${subOptionStyle} transition-opacity duration-300 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                to={subOption?.link ?? location.pathname}
                key={subOption.title}
                id={subOption.link}
                className={`${buttonStyle} ${subOptionStyle} ${
                  subOption?.link === location.pathname ? activeStyle : ""
                }`}
              >
                {subOption.icon && (
                  <span className="pl-2">{subOption.icon}</span>
                )}
                <h4 className="">{subOption.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SideBar: React.FC<SideBarProps> = ({ options}) => {
  const [activeOptions, setActiveOptions] = React.useState<string[]>([]);

  const {isAuthenticated} = useAuth();
  
  if (!isAuthenticated) {
    return <h1>Simple Sidebar </h1>;
  }

  const handleClick = (selectedOption: Option) => {
    const hasSubOptions = options.find(
      (opt) => opt.title === selectedOption.title
    )?.subOptions;

    // Si la opción tiene subopciones, activar o desactivar según su estado actual
    if (hasSubOptions) {
      updateActiveOptions(selectedOption.title);
    }
  };

  const updateActiveOptions = (selectedOption: string) => {
    const isOptionActive = activeOptions.includes(selectedOption);

    const newActiveOptions = isOptionActive
      ? activeOptions.filter((activeOption) => activeOption !== selectedOption)
      : [...activeOptions, selectedOption];

    setActiveOptions(newActiveOptions);
  };

  

  return (
    <div className={sidebarStyle}>
      <FaRegUserCircle className={logoStyle} />
      {options.map((option) => (
        <SideBarButton
          key={option.title}
          option={option}
          isActive={activeOptions.includes(option.title)}
          icon={option.icon}
          onClick={() => handleClick(option)}
        >
          <RecursiveSubOptions
            option={option}
            isActive={activeOptions.includes(option.title)}
          />
        </SideBarButton>
      ))}
    </div>
  );
 
  
};

export default SideBar;
