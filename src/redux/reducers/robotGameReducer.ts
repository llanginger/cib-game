import { IRobotEmotion } from "../../components/Robot/robotImages";

export interface IRobotGameReducer {
    currentEmotion: IRobotEmotion;
    intensity: 0 | 1 | 2;
}

const initState: IRobotGameReducer = {
    currentEmotion: "rage",
    intensity: 2
};

export const robotGameReducer = (
    state: IRobotGameReducer = initState,
    action
) => {
    switch (action.type) {
        case "CHOOSE_FACE":
            return {
                ...state,
                currentEmotion: action.payload.emotion,
                intensity: state.intensity < 2 ? 1 + state.intensity : 0
            };
        case "NEW_ROBOT_FACE":
            return {
                ...state,
                currentEmotion: action.payload.emotion
            };
        default:
            return state;
    }
};
