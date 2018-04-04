import { IPayloadAction } from "../../interfaces/IPayloadAction";

interface IGetNextLevelTypeActionPayload {
    nextLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

export const getNextLevelType: (
    payload: IGetNextLevelTypeActionPayload
) => IPayloadAction<IGetNextLevelTypeActionPayload> = (
    payload: IGetNextLevelTypeActionPayload
) => {
    return {
        type: "CHANGE_GAME_LEVEL_TYPE",
        payload
    };
};
