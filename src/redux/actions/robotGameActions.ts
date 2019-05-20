import { IPayloadAction } from "../../interfaces/IPayloadAction";
import {
    IRobotEmotion,
    robotEmotions
} from "../../components/Robot/robotImages";
import { IRobotAnswerType } from "../../components/Robot/robotImages_new";
import { Action } from "redux";
import * as _ from "lodash";

interface IRobotGameChooseFaceAction {
    emotion: IRobotEmotion;
}

export const robotGameChooseFace: (
    payload: IRobotGameChooseFaceAction
) => IPayloadAction<IRobotGameChooseFaceAction> = (
    payload: IRobotGameChooseFaceAction
) => {
        return {
            type: "CHOOSE_FACE",
            payload
        };
    };

const getNewValue = (oldValue: IRobotEmotion) => {
    let newValue = _.sample(robotEmotions);
    while (newValue === oldValue) {
        newValue = _.sample(robotEmotions);
    }
    return newValue;
};

export const robotGameNewFace: (oldValue: IRobotEmotion) => Action = (
    oldValue: IRobotEmotion
) => {
    return {
        type: "NEW_ROBOT_FACE",
        payload: {
            emotion: getNewValue(oldValue)
        }
    };
};


export const robotGameStartAnimation: ({
    answerType: boolean,
    clickedEmotion: IRobotEmotion
}) => IPayloadAction<any> = ({
    answerType,
    clickedEmotion
}) => {
        return {
            type: "START_ROBOT_ANIMATION",
            payload: {
                correct: answerType,
                clickedEmotion
            }
        };
    };
