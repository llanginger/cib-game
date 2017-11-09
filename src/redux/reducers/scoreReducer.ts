export interface IScoreReducer {
    hotScore: number;
    coolScore: number;
}

const initState: IScoreReducer = {
    hotScore: 0,
    coolScore: 0
};

export const scoreReducer = (state: IScoreReducer = initState, action: any) => {
    switch (action.type) {
        case "INCREMENT_HOT_SCORE":
            return {
                ...state,
                hotScore: (state.hotScore += 1)
            };
        case "INCREMENT_COOL_SCORE":
            return {
                ...state,
                coolScore: (state.coolScore += 1)
            };
        default:
            return state;
    }
};