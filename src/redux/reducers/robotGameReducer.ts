import { IRobotEmotion } from "../../components/Robot/robotImages";
import { IRobotAnswerType } from "../../components/Robot/robotImages_new";

export interface IRobotGameReducer {
    currentEmotion: IRobotEmotion;
    clickedEmotion: IRobotEmotion
    intensity: 0 | 1 | 2;
    startAnimation: boolean;
    robotAnswerType: IRobotAnswerType;
    level: number;
}

const initState: IRobotGameReducer = {
    currentEmotion: "rage",
    clickedEmotion: "rage",
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
        case "SET_LEVEL_TO":
            return {
                ...initState
            };
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
                clickedEmotion: action.payload.clickedEmotion,
                robotAnswerType:
                    action.payload.correct === true ? "correct" : "incorrect"
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
