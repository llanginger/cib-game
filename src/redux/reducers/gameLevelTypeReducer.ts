export interface IGameLevelTypeReducer {
    gameLevelType: 0 | 1 | 2 | 3 | 4 | 5;
}

const initState: IGameLevelTypeReducer = { gameLevelType: 0 };

export const gameLevelTypeReducer = (
    state: IGameLevelTypeReducer = initState,
    action
) => {
    switch (action.type) {
        case "CHANGE_GAME_LEVEL_TYPE":
            return {
                ...state,
                gameLevelType: action.payload.nextLevel
            };
        default:
            return state;
    }
};
