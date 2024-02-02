import { ReactEventHandler } from "react";

export interface SidebarProps {
  isOpen?: boolean;
  toggle?: ReactEventHandler;
}
