import { FunctionComponent, SVGProps } from "react";

export interface SvgIconProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  color?: string;
  usingStroke?: boolean;
}

export type StyledSvgIconProps = Pick<SvgIconProps, "width" | "height" | "color" | "usingStroke">;
