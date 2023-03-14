import { StatusType } from "./status.type";

export enum Entity {
  Player = "Player",
  AI = "AI",
}

export enum Result {
  WIN = "YOU WIN!",
  LOSE = "YOU LOSE!",
  DRAW = "DRAW",
}

export interface Game {
  [Entity.Player]: Choice;
  [Entity.AI]: Choice;
}

export interface GameState {
  history: Game[];
  rounds: number;
  win: number;
  draws: number;
  loses: number;
  cheatModeActivated: boolean;
  choices: {
    [Entity.Player]?: Choice;
    [Entity.AI]?: Choice;
  };
  status?: StatusType;
  error?: string | null;
}

export enum Choice {
  Rock = "Rock",
  Paper = "Paper",
  Scissor = "Scissor",
  Well = "Well"
}
