import { IDuoGameCard } from "../../../redux/reducers/index"
import * as _ from "lodash"

const dummyCards: {
    headerText: string
    cards: IDuoGameCard[]

}[] = [
        {
            headerText: "Choose the Hot thought",
            cards: [
                {
                    correctAnswer: false,
                    image: require("../../../images/balloonCool.png"),
                    selected: false,
                    id: 0
                },
                {
                    correctAnswer: true,
                    selected: false,
                    image: require("../../../images/balloonHot.png"),
                    id: 1
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../images/batmanHot.png"),
                    id: 2
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../images/batmanCool.png"),
                    id: 3
                }
            ]
        },
        {
            headerText: "Choose the Sad face",
            cards: [
                {
                    correctAnswer: true,
                    image: require("../../../images/girlHot.png"),
                    selected: false,
                    id: 0
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../images/girlCool.png"),
                    id: 1
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../images/hot.png"),
                    id: 2
                },
                {
                    correctAnswer: false,
                    selected: false,
                    image: require("../../../images/cool.png"),
                    id: 3
                }
            ]
        }
    ]

export const getDuoCards = () => {
    const sample = _.sample(dummyCards)
    const randomCards = _.shuffle(dummyCards[1])
    return dummyCards[1]
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