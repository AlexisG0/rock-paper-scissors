import React from "react";
import styled, { css } from "styled-components";

const StyledSpace = styled.div<RpSpaceProps>`
  ${({ direction, spacing }) =>
    direction === "vertical"
      ? css`
          height: ${spacing}px;
        `
      : css`
          width: ${spacing}px;
        `}
`;

const RpSpace: React.FunctionComponent<RpSpaceProps> = (
  props: RpSpaceProps
) => {
  return <StyledSpace {...props} />;
};

export default RpSpace;

interface RpSpaceProps {
  direction: "vertical" | "horizontal";
  spacing: number;
}
