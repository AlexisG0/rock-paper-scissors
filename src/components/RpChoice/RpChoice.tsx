import { Box } from "@mui/material";
import React from "react";
import styled, { css } from "styled-components";
import { white } from "../../utils/colors";

export const StyledChoiceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 25px;
`;

const StyledChoice = styled.div<{ color: string; isAI?: boolean }>`
  border: 10px solid ${({ color }) => color};
  background-color: ${white};
  width: 25px;
  height: 25px;
  padding: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  ${({ isAI }) =>
    !isAI &&
    css`
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `}
`;

const RpChoice: React.FunctionComponent<RpChoiceProps> = (
  props: RpChoiceProps
) => {
  return (
    <StyledChoice
      color={props.color}
      onClick={!props.isAI && props.onClick}
      isAI={props.isAI}
    >
      {props.choice}
    </StyledChoice>
  );
};

interface RpChoiceProps {
  color: string;
  choice: React.ReactElement;
  isAI?: boolean;
  onClick?: () => void;
}

export default RpChoice;
