import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { IRobotEmotion } from "../../components/Robot/robotImages";

interface IGameOneSubmitAction {
    correct: boolean;
}

export const gameOneSubmitAnswer: (
    payload: IGameOneSubmitAction
) => IPayloadAction<IGameOneSubmitAction> = (payload: IGameOneSubmitAction) => {
    return {
        type: "GAME-ONE_SUBMIT_ANSWER",
        payload
    };
};
