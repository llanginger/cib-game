import { IDuoTextGameLevel } from "../../../../redux/reducers/index"
import * as _ from "lodash"

const textGameLevels: IDuoTextGameLevel[] = [
    {
        headerText: "What kind of thought did the girl just experience?",
        bodyText: ["first part", "second part"],
        currentSelectedWord: { word: "", correct: false },
        image: require("../../../../images/balloonHot.png"),
        answerImage: require("../../../../images/balloonCool.png"),
        words: [
            {
                word: "Hot",
                correct: false
            },
            {
                word: "Cool",
                correct: true
            },
            {
                word: "Other",
                correct: false
            }
        ]
    },
    {
        headerText: "Pick a word",
        bodyText: ["first part", "second part"],
        currentSelectedWord: { word: "", correct: false },
        image: require("../../../../images/balloonHot.png"),
        answerImage: require("../../../../images/balloonCool.png"),
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
    },
]

export const getTextGameLevel: () => IDuoTextGameLevel = () => {
    const random = _.sample(textGameLevels)
    return random
}