import React, { useState } from "react";
import { HiOutlineCog } from "react-icons/hi";
import styled from "styled-components";
import { white } from "../../utils/colors";
import ModalSettings from "../RpModal/modals/ModalSettings";

const StyledSettings = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const StyledButton = styled.div`
  display: flex;
  background-color: transparent;
  font-size: 24px;
  border: 2px solid ${white};
  border-radius: 16px;
  padding: 12px;
  color: ${white};
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const RpSettings: React.FunctionComponent = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <StyledSettings>
        <StyledButton onClick={() => setSettingsOpen(true)}>
          <HiOutlineCog />
        </StyledButton>
      </StyledSettings>

      <ModalSettings
        open={settingsOpen}
        handleClose={() => setSettingsOpen(false)}
      />
    </>
  );
};

export default RpSettings;
