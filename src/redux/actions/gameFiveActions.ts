import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { Action } from "redux";

export const animateEmojiGameImageAction: () => Action = () => {
    return {
        type: "START_EMOJI_ANIMATION"
    };
};

export const newEmojiAction: (delay?: number) => Action = (
    delay: number = 0
) => {
    return {
        type: "NEW_EMOJI_LEVEL",
        delay
    };
};
