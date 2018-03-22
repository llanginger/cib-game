export interface ILaiaScoreReducer {
    score: number;
}

const initState: ILaiaScoreReducer = {
    score: 37
}

export const laiaScoreReducer = (state: ILaiaScoreReducer = initState, action) => {
    switch (action.type) {
        case "PARROT_GAME_SUBMIT_ANSWER":
            if (action.payload.correct) {
                return {
                    score: state.score += 10
                }
            } else {
                return {
                    score: state.score > 9 ? state.score -= 10 : 0
                }
            }
        default: return state
    }
}