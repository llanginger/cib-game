import { IGameTwoLevel } from "../GameTwo/logic/index";
import { IGameThreeLevel } from "../GameThree/logic/index";
export const getImage: (
    revealAnswer: boolean,
    level: IGameTwoLevel | IGameThreeLevel
) => number = (revealAnswer: boolean, level: IGameTwoLevel) => {
    return revealAnswer ? level.image_after : level.image_before;
};
