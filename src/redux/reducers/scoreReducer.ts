export interface IScoreReducer {
    score: number;
    resultMessage: string;
}

const initState: IScoreReducer = {
    score: 0,
    resultMessage: "Great job!"
};

export const scoreReducer = (state: IScoreReducer = initState, action) => {
    switch (action.type) {
        case "GAME-ONE_SUBMIT_ANSWER":
        case "START_ROBOT_ANIMATION":
            if (action.payload) {
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
