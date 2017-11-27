export interface IDuoTextGameWord {
    word: string, correct: boolean
}
export interface IDuoTextGameLevel {
    headerText: string;
    bodyText: [string, string];
    currentSelectedWord: IDuoTextGameWord;
    image: any;
    words: IDuoTextGameWord[]
}

export interface IDuoTextGameReducer {
    textGameLevel: IDuoTextGameLevel;
    score: any;
    wordSelected: boolean
}

const dummyTextGameLevel: IDuoTextGameLevel = {
    headerText: "Pick a word",
    bodyText: ["first part", "second part"],
    currentSelectedWord: { word: "", correct: false },
    image: require("../../images/balloonCool.png"),
    words: [
        {
            word: "Yes",
            correct: false
        },
        {
            word: "No",
            correct: false
        },
        {
            word: "Yes",
            correct: false
        },
        {
            word: "No",
            correct: false
        },
        {
            word: "Yes",
            correct: false
        },
        {
            word: "sentence",
            correct: true
        },
        {
            word: "Yes",
            correct: false
        },
        {
            word: "No",
            correct: false
        },
    ]
}

const initState: IDuoTextGameReducer = {
    textGameLevel: dummyTextGameLevel,
    score: 0,
    wordSelected: false
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
                ...initState,
                textGameLevel: action.payload.textGameLevel
            }
        default: return state
    }
}