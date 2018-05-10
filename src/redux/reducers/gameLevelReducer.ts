export interface IGameLevelTypeReducer {
    gameLevelType: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    gameTitle: string;
}

const levelTitles: string[] = [
    "Game One, Tutorial",
    "Game Two",
    "Game Three",
    "Game Four",
    "Game Five",
    "Game Six",
    "Game Seven"
];

const initlevelType = 5;
const initState: IGameLevelTypeReducer = {
    gameLevelType: initlevelType,
    gameTitle: levelTitles[initlevelType]
};

export const gameLevelReducer = (
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
