import { ReactNode } from "react";

export interface NavBarButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className"> {
    icon: ReactNode,
    children: ReactNode,
    active?: boolean;
    color?: string;
}
