import { IPayloadAction } from "../../interfaces/IPayloadAction"
import { IDuoTextGameLevel } from "../reducers/index"
interface ITextGameSubmitWordAction {
    textGameLevel: IDuoTextGameLevel;
    gameType: "word" | "card"
}

export const textGameSubmitWord: (level: IDuoTextGameLevel, gameType: "word" | "card") => IPayloadAction<ITextGameSubmitWordAction> = (level: IDuoTextGameLevel, gameType: "word" | "card") => {
    return {
        type: "TEXTGAME_SUBMIT_WORD",
        payload: {
            textGameLevel: level,
            gameType
        }
    }
}