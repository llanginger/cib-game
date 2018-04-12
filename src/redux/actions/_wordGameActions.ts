// import { IPayloadAction } from "../../interfaces/IPayloadAction"
// import { IWordGameLevel } from "../reducers/index"
// interface ITextGameSubmitWordAction {
//     textGameLevel: IWordGameLevel;
//     gameType: "word" | "card"
// }

// export const wordGameNewLevel: (level: IWordGameLevel, gameType: "word" | "card") => IPayloadAction<ITextGameSubmitWordAction> = (level: IWordGameLevel, gameType: "word" | "card") => {
//     return {
//         type: "WORDGAME_NEW_LEVEL",
//         payload: {
//             textGameLevel: level,
//             gameType
//         }
//     }
// }

// export const wordGameSubmitWord: (correct: boolean) => IPayloadAction<{ correct: boolean }> = (correct: boolean) => {
//     return {
//         type: "WORDGAME_SUBMIT_WORD",
//         payload: {
//             correct
//         }
//     }
// }
