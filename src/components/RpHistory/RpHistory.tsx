import { Box } from "@mui/material";
import React from "react";
import { white } from "../../utils/colors";
import { getIcon } from "../../utils/functions";
import { useAppSelector } from "../../utils/hooks/reduxHook";
import { Entity, Game } from "../../utils/redux/types/game.type";
import RpTypography from "../RpTypography/RpTypography";

const RpHistory: React.FunctionComponent = () => {
  const stateGame = useAppSelector((state) => state.game);

  return (
    <>
      {stateGame.history.length === 0 ? (
        <RpTypography color={white} justifyContent={"center"}>
          No one game for now...
        </RpTypography>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"15px"}
        >
          {stateGame.history.map((game: Game, index: number) => {
            return (
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={"25px"}
                key={index}
              >
                <div>{getIcon(game[Entity.Player])}</div>
                <RpTypography color={white} bold={true}>
                  ROUND {stateGame.rounds - index}
                </RpTypography>
                <div>{getIcon(game[Entity.AI])}</div>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default RpHistory;
