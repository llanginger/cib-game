import { IGameTwoLevel } from "./index";
export const getImage: (
    revealAnswer: boolean,
    level: IGameTwoLevel
) => number = (revealAnswer: boolean, level: IGameTwoLevel) => {
    return revealAnswer ? level.image_after : level.image_before;
};
