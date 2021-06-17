import { FunctionComponent, InputHTMLAttributes, SVGProps } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
    iconColor?: string;
    labelText?: string;
}