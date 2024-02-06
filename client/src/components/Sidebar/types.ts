export interface Option {
  title: string;
  link: string;
  icon?: React.ReactElement;
  subOptions?: Option[];
}

export interface SideBarButtonProps {
  option: Option;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  active: string;
  icon?: React.ReactElement;
}

export interface SideBarProps {
  options: Option[];
}
