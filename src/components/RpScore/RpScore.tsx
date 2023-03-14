import { Box } from "@mui/material";
import React from "react";
import { white } from "../../utils/colors";
import RpTypography from "../RpTypography/RpTypography";

const RpScore: React.FunctionComponent<RpScoreProps> = (
  props: RpScoreProps
) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <RpTypography variant={"h2"} color={white}>
        {props.title}
      </RpTypography>
      <RpTypography variant={"h2"} color={white}>
        {props.score}
      </RpTypography>
    </Box>
  );
};

interface RpScoreProps {
  title: string;
  score: number;
}

export default RpScore;
