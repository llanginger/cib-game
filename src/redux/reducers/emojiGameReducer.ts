import {
    emojiLevels,
    IEmojiLevel
} from "../../components/GameFive/emojiLevels";

export interface IEmojiGameReducer {
    emojiLevels: IEmojiLevel[];
    currentLevel: number;
    startAnimation: boolean;
}

const initState: IEmojiGameReducer = {
    emojiLevels,
    currentLevel: 0,
    startAnimation: false
};
export const emojiGameReducer = (
    state: IEmojiGameReducer = initState,
    action
) => {
    switch (action.type) {
        case "SET_LEVEL_TO":
            return {
                ...initState
            };
        case "START_EMOJI_ANIMATION":
            return {
                ...state,
                startAnimation: true
            };
        case "NEW_EMOJI_LEVEL":
            return {
                ...state,
                currentLevel: (state.currentLevel += 1),
                startAnimation: false
            };
        default:
            return state;
    }
};
