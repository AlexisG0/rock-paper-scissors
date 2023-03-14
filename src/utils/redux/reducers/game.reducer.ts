import { createSlice } from "@reduxjs/toolkit";
import { getResult } from "../../functions";
import {
  handleChoice,
  handleManageCheatMode,
  handleRestart,
} from "../actions/game.action";
import { Choice, Entity, GameState, Result } from "../types/game.type";
import { StatusType } from "../types/status.type";

const initialState: GameState = {
  history: [],
  rounds: 0,
  win: 0,
  draws: 0,
  loses: 0,
  cheatModeActivated: false,
  choices: {
    [Entity.Player]: null,
    [Entity.AI]: null,
  },
  status: StatusType.Idle,
  error: null,
};

const { reducer } = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleChoice.fulfilled, (state, { payload }) => {
        const AIChoice = getRandomChoice();

        state.choices[payload.entity as unknown as keyof Choice] =
          payload.choice;
        state.choices[Entity.AI] = AIChoice;
        state.rounds += 1;

        state.win =
          getResult(payload.choice, AIChoice) === Result.WIN
            ? (state.win += 1)
            : state.win;
        state.loses =
          getResult(payload.choice, AIChoice) === Result.LOSE
            ? (state.loses += 1)
            : state.loses;
        state.draws =
          getResult(payload.choice, AIChoice) === Result.DRAW
            ? (state.draws += 1)
            : state.draws;

        if (state.history.length === 5) {
          state.history.pop();
        }

        state.history.unshift({
          [Entity.Player]: payload.choice,
          [Entity.AI]: AIChoice,
        });
      })

      .addCase(handleRestart.fulfilled, (state) => {
        state.choices[Entity.Player] = null;
        state.choices[Entity.AI] = null;
      })

      .addCase(handleManageCheatMode.fulfilled, (state, { payload }) => {
        state.cheatModeActivated = payload;
      });
  },
});

const getRandomChoice = (): Choice => {
  const values = [Choice.Rock, Choice.Paper, Choice.Scissor];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

export default reducer;
