import { IPayloadAction } from "../../interfaces/IPayloadAction";
import { IRobotEmotion } from "../reducers/index";

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
