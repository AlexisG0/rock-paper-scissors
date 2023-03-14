import React from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { white } from "../../utils/colors";
import { getResult } from "../../utils/functions";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHook";
import { handleChoice } from "../../utils/redux/actions/game.action";
import { Entity, Choice } from "../../utils/redux/types/game.type";
import RpChoice, { StyledChoiceContainer } from "../RpChoice/RpChoice";
import RpTypography from "../RpTypography/RpTypography";
import { GiWell } from "react-icons/gi";

const RpPlayer: React.FunctionComponent<RpPlayerProps> = (
  props: RpPlayerProps
) => {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  return (
    <StyledChoiceContainer>
      {game.choices[props.player1] !== Choice.Rock &&
        game.choices[props.player1] !== Choice.Paper &&
        game.choices[props.player1] !== Choice.Scissor &&
        game.choices[props.player1] !== Choice.Well && (
          <RpChoice
            isAI={props.player1 === Entity.AI}
            color={"#bd1231"}
            choice={<FaHandRock size={32} />}
            onClick={() =>
              dispatch(
                handleChoice({
                  entity: props.player1,
                  choice: Choice.Rock,
                })
              )
            }
          />
        )}

      {game.choices[props.player1] !== Choice.Rock &&
        game.choices[props.player1] !== Choice.Paper &&
        game.choices[props.player1] !== Choice.Scissor &&
        game.choices[props.player1] !== Choice.Well && (
          <RpChoice
            isAI={props.player1 === Entity.AI}
            color={"#d08701"}
            choice={<FaHandPaper size={32} />}
            onClick={() =>
              dispatch(
                handleChoice({
                  entity: props.player1,
                  choice: Choice.Paper,
                })
              )
            }
          />
        )}

      {game.choices[props.player1] !== Choice.Rock &&
        game.choices[props.player1] !== Choice.Paper &&
        game.choices[props.player1] !== Choice.Scissor &&
        game.choices[props.player1] !== Choice.Well && (
          <RpChoice
            isAI={props.player1 === Entity.AI}
            color={"#0827bb"}
            choice={<FaHandScissors size={32} />}
            onClick={() =>
              dispatch(
                handleChoice({
                  entity: props.player1,
                  choice: Choice.Scissor,
                })
              )
            }
          />
        )}

      {game.cheatModeActivated && props.player1 === Entity.Player
        ? game.choices[props.player1] !== Choice.Rock &&
          game.choices[props.player1] !== Choice.Paper &&
          game.choices[props.player1] !== Choice.Scissor &&
          game.choices[props.player1] !== Choice.Well && (
            <RpChoice
              color={"#08bb1d"}
              choice={<GiWell size={32} />}
              onClick={() =>
                dispatch(
                  handleChoice({
                    entity: props.player1,
                    choice: Choice.Well,
                  })
                )
              }
            />
          )
        : null}

      {game.choices[props.player1] !== null &&
        game.choices[props.player2] !== null && (
          <RpTypography variant={"h2"} color={white}>
            {getResult(
              game.choices[props.player1],
              game.choices[props.player2]
            )}
          </RpTypography>
        )}
    </StyledChoiceContainer>
  );
};

interface RpPlayerProps {
  player1: Entity;
  player2: Entity;
}

export default RpPlayer;
