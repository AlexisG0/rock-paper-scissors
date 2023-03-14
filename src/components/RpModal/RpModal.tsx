import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { HiOutlineX } from "react-icons/hi";
import styled from "styled-components";
import { black, grey } from "../../utils/colors";

const StyledClosed = styled(HiOutlineX)`
  position: absolute;
  right: 12px;
  top: 12px;
  color: ${grey};

  &:hover {
    cursor: pointer;
    color: ${black};
  }
`;

const RpModal: React.FunctionComponent<RpModalProps> = (
  props: RpModalProps
) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    outline: "none",
    p: 3,
    maxHeight: "75%",
    overflowY: "scroll",
    overflowX: "hidden",
  };

  return (
    <Modal
      aria-labelledby={"transition-modal-title"}
      aria-describedby={"transition-modal-description"}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          {props.children}
          <StyledClosed
            size={16}
            onClick={props.handleClose}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

interface RpModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default RpModal;
