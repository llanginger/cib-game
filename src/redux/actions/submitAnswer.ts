import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { IRobotEmotion } from "../../components/Robot/robotImages";

interface IGameOneSubmitAction {
    correct: boolean;
}

export const submitAnswer: (
    payload: IGameOneSubmitAction
) => IPayloadAction<IGameOneSubmitAction> = (payload: IGameOneSubmitAction) => {
    return {
        type: "GAME-ONE_SUBMIT_ANSWER",
        payload
    };
};
