export interface ILaiaScoreReducer {
    score: number;
    resultMessage: string;
}

const initState: ILaiaScoreReducer = {
    score: 0,
    resultMessage: "Great job!"
};

export const laiaScoreReducer = (
    state: ILaiaScoreReducer = initState,
    action
) => {
    switch (action.type) {
        case "PARROT_GAME_SUBMIT_ANSWER":
            if (action.payload.correct) {
                return {
                    score: (state.score += 10),
                    resultMessage: "Great job!"
                };
            } else {
                return {
                    score: state.score > 9 ? (state.score -= 10) : 0,
                    resultMessage: "Don't worry, you'll get it next time!"
                };
            }
        default:
            return state;
    }
};
