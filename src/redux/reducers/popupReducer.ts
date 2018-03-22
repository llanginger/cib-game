export interface IPopupReducer {
    showPopup: boolean;
    correct: boolean
}

const initState: IPopupReducer = {
    showPopup: false,
    correct: true
}

export const popupReducer = (state: IPopupReducer = initState, action) => {
    switch (action.type) {
        case "CARDGAME_SHOW_ANSWER":
        case "WORDGAME_SUBMIT_WORD":
        case "PARROT_GAME_SUBMIT_ANSWER":
            return {
                ...state,
                showPopup: true,
                correct: action.payload.correct ? true : false
            }
        case "RESET_POPUP": {
            return {
                ...state,
                showPopup: false
            }
        }
        default: return state
    }
}