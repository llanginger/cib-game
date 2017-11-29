

export interface IWordGameWord {
    word: string, correct: boolean
}
export interface IWordGameLevel {
    headerText: string;
    bodyText: [string, string];
    currentSelectedWord: IWordGameWord;
    image: any;
    answerImage: any;
    words: IWordGameWord[]
}

export interface IWordGameReducer {
    textGameLevel: IWordGameLevel;
    showAnswer: boolean;
    score: any;
    wordSelected: boolean
}

const initWordGameLevel: IWordGameLevel = {
    headerText: "Juliana is having a COOL thought about doing homeworkd",
    bodyText: ["I", "homework!"],
    currentSelectedWord: { word: "", correct: false },
    image: require("../../images/studyPre.png"),
    answerImage: require("../../images/studyCool.png"),
    words: [
        {
            word: "hate",
            correct: false
        },
        {
            word: "love",
            correct: true
        },
        {
            word: "don't care about",
            correct: false
        },
        {
            word: "enjoy",
            correct: true
        }
    ]
}

const initState: IWordGameReducer = {
    textGameLevel: initWordGameLevel,
    score: 0,
    wordSelected: false,
    showAnswer: false
}

export const wordGameReducer = (state: IWordGameReducer = initState, action) => {
    switch (action.type) {
        case "TEXTGAME_SELECT_WORD":
            return {
                ...state,
                wordSelected: true,
                textGameLevel: {
                    ...state.textGameLevel,
                    currentSelectedWord: action.payload.word
                }
            }
        case "TEXTGAME_SUBMIT_WORD":
            return {
                ...state,
                showAnswer: true
            }
        case "TEXTGAME_NEW_LEVEL":
            return {
                ...initState,
                textGameLevel: action.payload.textGameLevel
            }
        default: return state
    }
}