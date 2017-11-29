import { IPayloadAction } from "../../interfaces/IPayloadAction"
import { IWordGameLevel } from "../reducers/index"
interface ITextGameSubmitWordAction {
    textGameLevel: IWordGameLevel;
    gameType: "word" | "card"
}

export const textGameNewLevel: (level: IWordGameLevel, gameType: "word" | "card") => IPayloadAction<ITextGameSubmitWordAction> = (level: IWordGameLevel, gameType: "word" | "card") => {
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