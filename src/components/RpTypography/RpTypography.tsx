import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";
import styled, { css } from "styled-components";
import { FontFamily } from "../../utils/theme";

interface StyledTypographyProps {
  bold?: boolean;
  color?: string;
  fontFamily?: FontFamily;
  fontSize?: string;
  display?: string;
  gap?: string;
  flex?: number;
  lineHeight?: number;
  justifyContent?: string;
  ellipsis?: number;
  underline?: boolean;
  icon?: boolean;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  font-size: ${({ fontSize }) => fontSize && fontSize};
  ${({ icon }) =>
    icon
      ? css`
          display: flex;
        `
      : css<{ display?: string }>`
          display: ${({ display }) => display ?? "flex"};
        `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-family: Inter-Bold;
    `}

    ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}

  color: ${({ color }) => (color ? color : null)};
  align-items: center;
  gap: ${({ gap }) => gap ?? "5px"};
  flex: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: ${({ fontFamily }) => fontFamily};

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: ${ellipsis};
      -webkit-box-orient: vertical;
      white-space: normal;
    `}
`;

const RpTypography: React.FunctionComponent<RpTypographyProps> = (
  props: RpTypographyProps
) => {
  return (
    <StyledTypography
      {...props}
      bold={props.bold}
      fontFamily={props.fontFamily}
      variant={props.variant ?? "body2"}
      color={props.color}
      lineHeight={props.lineHeight}
      display={props.display}
      gap={props.gap}
      icon={props.icon}
      flex={props.flex}
      justifyContent={props.justifyContent}
      whiteSpace={props.whiteSpace ?? "none"}
      ellipsis={props.ellipsis}
    >
      {props.children}
    </StyledTypography>
  );
};

interface RpTypographyProps {
  children: React.ReactNode;
  display?: string;
  bold?: boolean;
  fontFamily?: FontFamily;
  variant?: Variant;
  color?: string;
  lineHeight?: number;
  fontSize?: string;
  underline?: boolean;
  whiteSpace?: any;
  gap?: string;
  flex?: number;
  justifyContent?: string;
  ellipsis?: number;
  icon?: boolean;
}

export default RpTypography;
