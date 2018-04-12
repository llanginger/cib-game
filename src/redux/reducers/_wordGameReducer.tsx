// import { initWordGameLevel } from "./initLevels"

// export interface IWordGameWord {
//     word: string, correct: boolean
// }
// export interface IWordGameLevel {
//     id: number;
//     headerText: string;
//     bodyText: [string, string];
//     image: any;
//     answerImage: any;
//     words: IWordGameWord[]
// }

// export interface IWordGameReducer {
//     seenLevels: number[]
//     textGameLevel: IWordGameLevel;
//     currentSelectedWord: IWordGameWord;
//     showAnswer: boolean;
//     score: any;
//     wordSelected: boolean
// }

// const initState: IWordGameReducer = {
//     seenLevels: [],
//     textGameLevel: initWordGameLevel,
//     currentSelectedWord: { word: "", correct: false },
//     score: 0,
//     wordSelected: false,
//     showAnswer: false
// }

// export const wordGameReducer = (state: IWordGameReducer = initState, action) => {
//     switch (action.type) {
//         case "WORDGAME_SELECT_WORD":
//             return {
//                 ...state,
//                 wordSelected: true,
//                 currentSelectedWord: action.payload.word,
//                 textGameLevel: {
//                     ...state.textGameLevel,
//                 }
//             }
//         case "WORDGAME_SUBMIT_WORD":
//             return {
//                 ...state,
//                 seenLevels: [...state.seenLevels, state.textGameLevel.id],
//                 showAnswer: true
//             }
//         case "WORDGAME_NEW_LEVEL":
//         case "INIT_APP":
//             return {
//                 ...state,
//                 currentSelectedWord: { word: "", correct: false },
//                 score: 0,
//                 wordSelected: false,
//                 showAnswer: false,
//                 textGameLevel: action.payload.textGameLevel
//             }
//         default: return state
//     }
// }
