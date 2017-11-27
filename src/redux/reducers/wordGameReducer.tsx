

export interface IDuoTextGameWord {
    word: string, correct: boolean
}
export interface IDuoTextGameLevel {
    headerText: string;
    bodyText: [string, string];
    currentSelectedWord: IDuoTextGameWord;
    image: any;
    answerImage: any;
    words: IDuoTextGameWord[]
}

export interface IDuoTextGameReducer {
    textGameLevel: IDuoTextGameLevel;
    showAnswer: boolean;
    score: any;
    wordSelected: boolean
}

const dummyTextGameLevel: IDuoTextGameLevel = {
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

const initState: IDuoTextGameReducer = {
    textGameLevel: dummyTextGameLevel,
    score: 0,
    wordSelected: false,
    showAnswer: false
}

export const duoTextGameReducer = (state: IDuoTextGameReducer = initState, action) => {
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