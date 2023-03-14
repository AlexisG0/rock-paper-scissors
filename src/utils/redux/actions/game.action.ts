import { createAsyncThunk } from "@reduxjs/toolkit";
import { Choice, Entity } from "../types/game.type";

export const handleChoice = createAsyncThunk(
  "app/choice",
  async (state: { entity: Entity; choice: Choice }) => {
    return state;
  }
);

export const handleRestart = createAsyncThunk(
  "app/restart",
  async () => {
    return true;
  }
);

export const handleManageCheatMode = createAsyncThunk(
  "app/cheatMode",
  async (state: boolean) => {
    return state;
  }
);
