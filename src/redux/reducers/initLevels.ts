import { IWordGameLevel, ICardGameLevel } from "./index";

export const initWordGameLevel: IWordGameLevel = {
    id: 0,
    headerText:
        "Juliana is happy (COOL) that she is doing well with her homework, what is she thinking?",
    bodyText: ["I", "homework!"],
    image: require("../../images/studyPre.png"),
    answerImage: require("../../images/studyCool.png"),
    words: [
        {
            word: "hate",
            correct: false
        },
        {
            word: "love doing",
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
};

export const initCardGameLevel: ICardGameLevel = {
    id: 4,
    headerText: "Choose the picture of a 'Hot' thought",
    cards: [
        {
            correctAnswer: false,
            image: require("../../images/balloonCool.png"),
            selected: false,
            id: 0
        },
        {
            correctAnswer: true,
            selected: false,
            image: require("../../images/balloonHot.png"),
            id: 1
        },
        {
            correctAnswer: false,
            selected: false,
            image: require("../../images/batmanHot.png"),
            id: 2
        },
        {
            correctAnswer: false,
            selected: false,
            image: require("../../images/batmanCool.png"),
            id: 3
        }
    ]
};
