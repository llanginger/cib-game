import { ILaiaGameLevel } from "./levels";
export const getImage: (
    revealAnswer: boolean,
    level: ILaiaGameLevel
) => number = (revealAnswer: boolean, level: ILaiaGameLevel) => {
    return revealAnswer ? level.image_after : level.image_before;
};
