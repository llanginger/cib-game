import { IRobotEmotion } from "../../components/Robot/robotImages";
import { IRobotAnswerType } from "../../components/Robot/robotImages_new";

export interface IRobotGameReducer {
    currentEmotion: IRobotEmotion;
    intensity: 0 | 1 | 2;
    startAnimation: boolean;
    robotAnswerType: IRobotAnswerType;
    level: number;
}

const initState: IRobotGameReducer = {
    currentEmotion: "rage",
    intensity: 2,
    startAnimation: false,
    robotAnswerType: "neutral",
    level: 0
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
        case "START_ROBOT_ANIMATION":
            return {
                ...state,
                startAnimation: true,
                robotAnswerType: action.payload
            };
        case "NEW_ROBOT_FACE":
            return {
                ...state,
                currentEmotion: action.payload.emotion,
                startAnimation: false,
                robotAnswerType: "neutral",
                level: (state.level += 1)
            };
        default:
            return state;
    }
};
