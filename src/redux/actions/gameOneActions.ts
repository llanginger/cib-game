import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { IRobotEmotion } from "../reducers/index";

interface IGameOneSubmitAction {
    correct: boolean;
}

export const gamOneSubmitAnswer: (
    payload: IGameOneSubmitAction
) => IPayloadAction<IGameOneSubmitAction> = (payload: IGameOneSubmitAction) => {
    return {
        type: "GAME-ONE_SUBMIT_ANSWER",
        payload
    };
};
