import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { Action } from "redux";

export const animateEmoji: () => Action = () => {
    return {
        type: "START_EMOJI_ANIMATION"
    };
};

export const newEmoji: (delay?: number) => Action = (delay: number = 0) => {
    return {
        type: "NEW_EMOJI_LEVEL",
        delay
    };
};
