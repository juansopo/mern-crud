export interface Option {
  title: string;
  link?: string;
  icon?: React.ReactElement;
  subOptions?: Option[];
}

export interface SideBarButtonProps {
  option: Option;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isActive: boolean;
  icon?: React.ReactElement;
  className?: string
}

export interface SideBarProps {
  options: Option[];
}
