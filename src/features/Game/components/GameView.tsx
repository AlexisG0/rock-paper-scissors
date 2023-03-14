import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RpScore from "../../../components/RpScore/RpScore";
import RpTypography from "../../../components/RpTypography/RpTypography";
import { white } from "../../../utils/colors";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/reduxHook";
import RpSpace from "../../../components/RpSpace/RpSpace";
import { Entity } from "../../../utils/redux/types/game.type";
import RpPlayer from "../../../components/RpPlayer/RpPlayer";
import RpHistory from "../../../components/RpHistory/RpHistory";
import { handleRestart } from "../../../utils/redux/actions/game.action";
import { FontFamily } from "../../../utils/theme";
import { StyledChoiceContainer } from "../../../components/RpChoice/RpChoice";
import RpSettings from "../../../components/RpSettings/RpSettings";

const StyledTitle = styled.div`
  border: 2px solid ${white};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  margin-top: 48px;
`;

const StyledPlayAgain = styled.button`
  background-color: transparent;
  font-family: ${FontFamily.InterBold};
  font-size: 24px;
  border: 2px solid ${white};
  border-radius: 16px;
  padding: 12px;
  color: ${white};
  transition: transform 0.2s;
  margin-top: 25px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const CandidatesView: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  return (
    <Grid
      container={true}
      justifyContent={"center"}
      height={"100%"}
      alignContent={"flex-start"}
      position={"relative"}
    >
      <RpSettings />
      <Grid
        item={true}
        md={12}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid item={true} md={6} width={"100%"}>
          <StyledTitle>
            <RpTypography variant={"h1"} color={white} lineHeight={30}>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
              <br />
            </RpTypography>
            <RpTypography variant="h2" color={white}>
              ROUND {game.rounds}
            </RpTypography>
          </StyledTitle>
        </Grid>
      </Grid>
      <Grid
        item={true}
        md={8}
        width={"100%"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        <Grid
          container={true}
          paddingBottom={"24px"}
          borderBottom={`1px solid ${white}`}
        >
          <Grid item={true} md={4}>
            <RpScore title={"WIN"} score={game.win} />
          </Grid>
          <Grid item={true} md={4}>
            <RpScore title={"DRAW"} score={game.draws} />
          </Grid>
          <Grid item={true} md={4}>
            <RpScore title={"WIN"} score={game.loses} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item={true}
        md={8}
        width={"100%"}
        textAlign={"center"}
        height={"calc(100% - 325px)"}
      >
        <Grid
          container={true}
          padding={"24px 0"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Grid
            item={true}
            md={4}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <RpTypography
              variant="h3"
              color={white}
              justifyContent={"center"}
              bold={true}
            >
              What's your choice?
            </RpTypography>

            <RpSpace direction="vertical" spacing={24} />

            <RpPlayer player1={Entity.Player} player2={Entity.AI} />
          </Grid>
          <Grid item={true} md={4}>
            <RpTypography variant="h3" color={white} justifyContent={"center"}>
              ROUNDS
            </RpTypography>

            <StyledChoiceContainer>
              <RpHistory />

              {game.choices[Entity.Player] !== null &&
              game.choices[Entity.AI] !== null ? (
                <StyledPlayAgain onClick={() => dispatch(handleRestart())}>
                  Play Again?
                </StyledPlayAgain>
              ) : null}
            </StyledChoiceContainer>
          </Grid>
          <Grid
            item={true}
            md={4}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <RpTypography
              variant="h3"
              color={white}
              justifyContent={"center"}
              bold={true}
            >
              AI's choice
            </RpTypography>

            <RpSpace direction="vertical" spacing={24} />

            <RpPlayer player1={Entity.AI} player2={Entity.Player} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CandidatesView;
