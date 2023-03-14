import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";
import { white } from "./colors";
import { Choice, Result } from "./redux/types/game.type";
import { GiWell } from "react-icons/gi";

export const getResult = (choice1: Choice, choice2: Choice) => {
  
  if (choice1 === choice2) {
    return Result.DRAW;
  } else if (
    (choice1 === Choice.Well &&
      (choice2 === Choice.Rock || choice2 === Choice.Scissor)) ||
    (choice1 === Choice.Paper && choice2 === Choice.Rock) ||
    (choice1 === Choice.Rock && choice2 === Choice.Scissor) ||
    (choice1 === Choice.Scissor && choice2 === Choice.Paper) ||
    (choice1 === Choice.Paper && choice2 === Choice.Well)
  ) {
    return Result.WIN;
  } else {
    return Result.LOSE;
  }
};

export const getIcon = (choice: Choice) => {
  switch (choice) {
    case Choice.Rock:
      return <FaHandRock size={32} color={white} />;

    case Choice.Paper:
      return <FaHandPaper size={32} color={white} />;

    case Choice.Scissor:
      return <FaHandScissors size={32} color={white} />;

    case Choice.Well:
      return <GiWell size={32} color={white} />;

    default:
      break;
  }
};
