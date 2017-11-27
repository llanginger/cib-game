import { IPayloadAction } from "../../interfaces/IPayloadAction"
import { IDuoCardGameLevel } from "../reducers/index"
interface ICardGameSubmitWordAction {
    level: IDuoCardGameLevel;
    gameType: "word" | "card"
}

export const cardGameSubmitWord: (level: IDuoCardGameLevel, gameType: "word" | "card") => IPayloadAction<ICardGameSubmitWordAction> = (level: IDuoCardGameLevel, gameType: "word" | "card") => {
    return {
        type: "_DUO_CONFIRM_SELECTION",
        payload: {
            level,
            gameType
        }
    }
}