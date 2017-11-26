export interface IGameTypeReducer {
    gameType: "word" | "card"
}

const initState: IGameTypeReducer = {
    gameType: "card"
}

export const gameTypeReducer = (state: IGameTypeReducer = initState, action) => {
    switch (action.type) {
        case "SET_GAME_TYPE":
            return {
                gameType: action.payload.gameType
            }
        default: return state
    }
}