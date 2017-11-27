import { IDuoGameCard } from "../../../../redux/reducers/index"
import * as _ from "lodash"

const dummyCards: {
    headerText: string
    cards: IDuoGameCard[]

}[] = [
        {
            headerText: "In which picture is Jane COOL?",
            cards: [
                {
                    correctAnswer: false,
                    image: require("../../../../images/fieldAnnoyed.png"),
                    selected: false,
                    id: 0
                },
                {
                    correctAnswer: true,
                    selected: false,
                    image: require("../../../../images/fieldCool.png"),
                    id: 1
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/fieldHot.png"),
                    id: 2
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/fieldPre.png"),
                    id: 3
                }
            ]
        },
        {
            headerText: "Which face is showing a HOT emotion?",
            cards: [
                {
                    correctAnswer: true,
                    image: require("../../../../images/girlPortraitAnger.png"),
                    selected: false,
                    id: 0
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/girlPortraitSad.png"),
                    id: 1
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/girlPortraitDisgust.png"),
                    id: 2
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/girlPortraitHappy.png"),
                    id: 3
                }
            ]
        },
        {
            headerText: "Which picture shows Violet listening?",
            cards: [
                {
                    correctAnswer: false,
                    image: require("../../../../images/benchIgnore.png"),
                    selected: false,
                    id: 0
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/benchPre.png"),
                    id: 1
                },
                {
                    correctAnswer: true,
                    selected: false,
                    image: require("../../../../images/benchCool.png"),
                    id: 2
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../../images/benchSad.png"),
                    id: 3
                }
            ]
        }
    ]

export const getDuoCards = () => {
    const sample = _.sample(dummyCards)
    const randomCards = _.shuffle(dummyCards[1])
    return sample
}

// It's terrible the balloon has flown away
// The balloon is going on its journey

// Have screen setup with pictures and have kid have to associate a speech bubble with them
// Have empty speech bubble and list of draggable text options

// Add third "neutral" scoring category

// Kids playing / kid being left
// Kid thinks "They should be playing with me"
// ^ second level: Making demands is a hot thought, leads to feeling worse than had the demand not been made. Second level can be about determining the types of Hot thought
// Types: Demands, Exaggerations, Jumping to the wrong conclusion without getting the facts, Thinking in black and white "Always, never etc"

// Memory game: have cards flip

// Samsung galaxy