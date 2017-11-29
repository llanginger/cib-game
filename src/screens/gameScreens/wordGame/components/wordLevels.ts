import { IWordGameLevel } from "../../../../redux/reducers/index"
import * as _ from "lodash"

const textGameLevels: IWordGameLevel[] = [
    {
        headerText: "Sally got caught out in the rain",
        bodyText: ["It's raining, I am wet -", ""],
        image: require("../../../../images/rainPre.png"),
        answerImage: require("../../../../images/rainCool.png"),
        words: [
            {
                word: "this is the worst",
                correct: false
            },
            {
                word: "I hate the rain",
                correct: false,
            },
            {
                word: "it's ok, it's just water",
                correct: true
            }
        ]
    },
    {
        headerText: "Frank dropped his icecream, how should he respond?",
        bodyText: ["It is", "that this happened"],
        image: require("../../../../images/icecreamHot.png"),
        answerImage: require("../../../../images/icecreamCool.png"),
        words: [
            {
                word: "awful",
                correct: false
            },
            {
                word: "bad",
                correct: false
            },
            {
                word: "fine",
                correct: true
            },
            {
                word: "unfair",
                correct: false
            }
        ]
    },
    {
        headerText: "Juliana is having a COOL thought about doing homeworkd",
        bodyText: ["I", "homework!"],
        image: require("../../../../images/studyPre.png"),
        answerImage: require("../../../../images/studyCool.png"),
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
    },
    {
        headerText: "Juliana is having a HOT thought about doing homeworkd",
        bodyText: ["I", "homework!"],
        image: require("../../../../images/studyPre.png"),
        answerImage: require("../../../../images/studyHot.png"),
        words: [
            {
                word: "hate",
                correct: true
            },
            {
                word: "love",
                correct: false
            },
            {
                word: "don't care about",
                correct: false
            },
            {
                word: "enjoy",
                correct: false
            }
        ]
    }
]

export const getTextGameLevel: () => IWordGameLevel = () => {
    const random = _.sample(textGameLevels)
    return random
}