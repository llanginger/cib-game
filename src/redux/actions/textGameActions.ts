import { IPayloadAction } from "../../interfaces/IPayloadAction"
import { IDuoTextGameLevel } from "../reducers/index"
interface ITextGameSubmitWordAction {
    textGameLevel: IDuoTextGameLevel;
    gameType: "word" | "card"
}

export const textGameNewLevel: (level: IDuoTextGameLevel, gameType: "word" | "card") => IPayloadAction<ITextGameSubmitWordAction> = (level: IDuoTextGameLevel, gameType: "word" | "card") => {
    return {
        type: "TEXTGAME_NEW_LEVEL",
        payload: {
            textGameLevel: level,
            gameType
        }
    }
}

export const textGameSubmitWord = () => {
    return {
        type: "TEXTGAME_SUBMIT_WORD"
    }
}