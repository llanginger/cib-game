// import { IPayloadAction } from "../../interfaces/IPayloadAction";
// import { ICardGameLevel } from "../reducers/index";
// interface ICardGameSubmitWordAction {
//     cardGameLevel: ICardGameLevel;
//     gameType: "word" | "card";
// }

// export const cardGameNewLevel: (
//     cardGameLevel: ICardGameLevel,
//     gameType: "word" | "card"
// ) => IPayloadAction<ICardGameSubmitWordAction> = (
//     cardGameLevel: ICardGameLevel,
//     gameType: "word" | "card"
// ) => {
//     return {
//         type: "CARDGAME_NEW_LEVEL",
//         payload: {
//             cardGameLevel,
//             gameType
//         }
//     };
// };

// export const cardGameSubmitWord: (
//     correct: boolean
// ) => IPayloadAction<{ correct: boolean }> = (correct: boolean) => {
//     return {
//         type: "CARDGAME_SHOW_ANSWER",
//         payload: {
//             correct
//         }
//     };
// };
