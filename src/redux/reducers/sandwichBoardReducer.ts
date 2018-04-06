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
        case "CARDGAME_SHOW_ANSWER":
        case "WORDGAME_SUBMIT_WORD":
        case "GAME-ONE_SUBMIT_ANSWER":
            return {
                ...state,
                showPopup: true,
                correct: action.payload
            };
        case "RESET_POPUP": {
            return {
                ...state,
                showPopup: false
            };
        }
        case "SHOW_SANDWICHBOARD": {
            return {
                ...state,
                showPopup: true
            };
        }
        default:
            return state;
    }
};
