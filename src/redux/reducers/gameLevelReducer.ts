export interface IGameLevelTypeReducer {
    gameLevelType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    gameTitle: string;
}

const levelTitles: string[] = [
    "Tutorial",
    "Basic Emotions",
    "Complex Emotions",
    "Robot Game",
    "Emoji Game",
    "When I feel...",
    "Advanced Emotions",
    "Fruit Game"
];

const initlevelType = 0;

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
        case "SET_LEVEL_TO":
            return {
                ...state,
                gameLevelType: action.payload.nextLevel,
                gameTitle: levelTitles[action.payload.nextLevel]
            };
        default:
            return state;
    }
};
