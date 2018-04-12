export interface IGameLevelTypeReducer {
    gameLevelType: 0 | 1 | 2 | 3 | 4 | 5;
    gameTitle: string;
}

const levelTitles: string[] = [
    "Game One, Tutorial",
    "Game Two",
    "Game Three",
    "Game Four",
    "Game Five",
    "Game Six"
];

const initState: IGameLevelTypeReducer = {
    gameLevelType: 0,
    gameTitle: levelTitles[0]
};

export const gameLevelTypeReducer = (
    state: IGameLevelTypeReducer = initState,
    action
) => {
    switch (action.type) {
        case "CHANGE_GAME_LEVEL_TYPE":
            return {
                ...state,
                gameLevelType: action.payload.nextLevel,
                gameTitle: levelTitles[action.payload.nextLevel]
            };
        default:
            return state;
    }
};
