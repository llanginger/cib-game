export interface IReadyScreenReducer {
    resetReadyScreen: boolean;
}

const initState: IReadyScreenReducer = { resetReadyScreen: false };

export const readyScreenReducer = (
    state: IReadyScreenReducer = initState,
    action
) => {
    switch (action.type) {
        case "CHANGE_GAME_LEVEL_TYPE":
            return {
                ...state,
                resetReadyScreen: true
            };
        case "HIDE_SANDWICHBOARD":
            return {
                ...state,
                resetReadyScreen: false
            };
        default:
            return state;
    }
};
