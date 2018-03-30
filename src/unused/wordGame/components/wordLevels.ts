import { IWordGameLevel } from "../../../../redux/reducers/index"
import * as _ from "lodash"

const textGameLevels: IWordGameLevel[] = [
    {
        id: 0,
        headerText: "Juliana is happy (COOL) that she is doing well with her homework, what is she thinking?",
        bodyText: ["I", "homework!"],
        image: require("../../../../images/studyPre.png"),
        answerImage: require("../../../../images/studyCool.png"),
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
    },
    {
        id: 1,
        headerText: "Sally got caught out in the rain without an umbrella, what should she think in order to remain COOL?",
        bodyText: ["It's raining -", ""],
        image: require("../../../../images/rainPre.png"),
        answerImage: require("../../../../images/rainCool.png"),
        words: [
            {
                word: "this is the worst day ever",
                correct: false
            },
            {
                word: "I hate the rain, this sucks",
                correct: false,
            },
            {
                word: "it's ok, I'll dry myself when I arrive",
                correct: true
            }
        ]
    },
    {
        id: 2,
        headerText: "Frank dropped his icecream, how should he respond with a COOL thought?",
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
        id: 3,
        headerText: "Juliana is unhappy (HOT) that she has to do homework, what is she thinking?",
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

export const getTextGameLevel: (seenLevels: number[]) => IWordGameLevel = (seenLevels: number[]) => {

    const filteredLevels = textGameLevels.filter(level => {
        return seenLevels.indexOf(level.id) === -1
    })
    const sample = () => {
        if (filteredLevels.length > 0) {
            return _.sample(filteredLevels)
        } else {
            return textGameLevels[0]
        }
    }

    return sample()
}