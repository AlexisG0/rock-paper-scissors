import styled, { css } from "styled-components";
import { grey } from "../../utils/colors";

const StyledLine = styled.div<RpLineProps>`
  ${({ direction }) =>
    direction === "vertical"
      ? css<RpLineProps>`
          height: 100%;
          width: ${({ size }) => (size ? size : 1)}px;
        `
      : css<RpLineProps>`
          height: ${({ size }) => (size ? size : 1)}px;
          width: 100%;
        `}

  background-color: ${({ color }) => (color ? color : grey)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  margin: ${({ spacing }) => (spacing ? `${spacing}px` : "")} 0;
  margin-top: ${({ spacingTop }) => (spacingTop ? `${spacingTop}px` : "")};
  margin-bottom: ${({ spacingBottom }) =>
    spacingBottom ? `${spacingBottom}px` : ""};
`;

const RpLine: React.FunctionComponent<RpLineProps> = (props: RpLineProps) => {
  return (
    <StyledLine
      color={props.color}
      opacity={props.opacity}
      spacing={props.spacing}
      spacingBottom={props.spacingBottom}
      spacingTop={props.spacingTop}
      size={props.size}
      direction={props.direction}
    >
      &nbsp;
    </StyledLine>
  );
};

export interface RpLineProps {
  color?: string;
  opacity?: number;
  spacing?: number;
  spacingBottom?: number;
  spacingTop?: number;
  size?: number;
  direction?: "vertical" | "horizontal";
}

export default RpLine;
