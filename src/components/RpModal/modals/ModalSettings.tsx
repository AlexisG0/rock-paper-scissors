import styled from "styled-components";
import { black } from "../../../utils/colors";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/reduxHook";
import { handleManageCheatMode } from "../../../utils/redux/actions/game.action";
import RpTypography from "../../RpTypography/RpTypography";
import RpModal from "../RpModal";

const StyledButton = styled.button`
  display: flex;
  margin-top: 25px;
  background-color: transparent;
  font-size: 24px;
  border: 2px solid ${black};
  border-radius: 16px;
  padding: 12px;
  color: ${black};
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ModalSettings: React.FunctionComponent<ModalSettingsProps> = (
  props: ModalSettingsProps
) => {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  const handleSelect = (choice: boolean) => {
    props.handleClose();
    dispatch(handleManageCheatMode(choice));
  };

  return (
    <RpModal open={props.open} handleClose={props.handleClose}>
      <RpTypography bold={true}>
        {game.cheatModeActivated ? "Deactivate" : "Activate"} cheat mode?
      </RpTypography>

      <StyledButton onClick={() => handleSelect(!game.cheatModeActivated)}>
        {game.cheatModeActivated ? "Deactivate" : "Activate"}
      </StyledButton>
    </RpModal>
  );
};

interface ModalSettingsProps {
  open: boolean;
  handleClose: () => void;
}

export default ModalSettings;
