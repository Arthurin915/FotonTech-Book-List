import React, { useState } from "react";
import { SvgContainer } from "./styles";
import { SvgIconProps } from "./types";

const SvgIcon: React.FC<SvgIconProps> = ({
  Icon,
  ...rest
}) => {
  return (
    <SvgContainer {...rest}>
      <Icon />
    </SvgContainer>
  );
};

export default SvgIcon;
