export interface IGameTypeReducer {
    gameType: "word" | "card"
}

const initState: IGameTypeReducer = {
    gameType: "word"
}

export const gameTypeReducer = (state: IGameTypeReducer = initState, action) => {
    switch (action.type) {
        case "SET_GAME_TYPE":
        case "TEXTGAME_SUBMIT_WORD":
        case "_DUO_CONFIRM_SELECTION":
            return {
                gameType: action.payload.gameType
            }
        default: return state
    }
}