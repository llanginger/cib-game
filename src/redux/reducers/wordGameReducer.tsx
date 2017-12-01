

export interface IWordGameWord {
    word: string, correct: boolean
}
export interface IWordGameLevel {
    headerText: string;
    bodyText: [string, string];
    image: any;
    answerImage: any;
    words: IWordGameWord[]
}

export interface IWordGameReducer {
    textGameLevel: IWordGameLevel;
    currentSelectedWord: IWordGameWord;
    showAnswer: boolean;
    score: any;
    wordSelected: boolean
}

const initWordGameLevel: IWordGameLevel = {
    headerText: "Juliana is having a COOL thought about doing homework, what is she thinking?",
    bodyText: ["I", "homework!"],
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
    currentSelectedWord: { word: "", correct: false },
    score: 0,
    wordSelected: false,
    showAnswer: false
}

export const wordGameReducer = (state: IWordGameReducer = initState, action) => {
    switch (action.type) {
        case "WORDGAME_SELECT_WORD":
            return {
                ...state,
                wordSelected: true,
                currentSelectedWord: action.payload.word,
                textGameLevel: {
                    ...state.textGameLevel,
                }
            }
        case "WORDGAME_SUBMIT_WORD":
            return {
                ...state,
                showAnswer: true
            }
        case "WORDGAME_NEW_LEVEL":
            return {
                ...initState,
                textGameLevel: action.payload.textGameLevel
            }
        default: return state
    }
}