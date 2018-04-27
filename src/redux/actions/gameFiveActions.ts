import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { Action } from "redux";

export const animateEmoji: () => Action = () => {
    return {
        type: "START_EMOJI_ANIMATION"
    };
};

export const newEmoji: () => Action = () => {
    return {
        type: "NEW_EMOJI_LEVEL"
    };
};
