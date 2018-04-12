export interface ISandwichBoardReducer {
    showPopup: boolean;
    correct: boolean;
}

const initState: ISandwichBoardReducer = {
    showPopup: false,
    correct: true
};

export const sandiwchBoardReducer = (
    state: ISandwichBoardReducer = initState,
    action
) => {
    switch (action.type) {
        case "HIDE_SANDWICHBOARD":
            return {
                ...state,
                showPopup: false
            };
        case "SHOW_SANDWICHBOARD":
        case "CHANGE_GAME_LEVEL_TYPE":
            return {
                ...state,
                showPopup: true
            };
        default:
            return state;
    }
};
