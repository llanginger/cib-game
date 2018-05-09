export type gameThreeAnswersSpanish =
    | "Júbilo"
    | "Fúria"
    | "Grima"
    | "Terror"
    | "Felicidad"
    | "Enojo"
    | "Pena"
    | "Susto"
    | "Serenidad"
    | "Desconsuelo"
    | "Repulsión"
    | "Tranquilidad";

export type gameThreeAnswersEnglish =
    | "Despair"
    | "Annoyed"
    | "Cheerful"
    | "Furious"
    | "Repulsed"
    | "Disgusted"
    | "Serene"
    | "Scared"
    | "Terrified"
    | "Tranquil"
    | "Gloomy"
    | "Joyful";

export interface IGameThreeLevel {
    characterName: string;
    image_before: number;
    image_after: number;
    answers: { text: gameThreeAnswersEnglish; correct: boolean }[];
}

export const gameThreeLevels: IGameThreeLevel[] = [
    {
        characterName: "Frog",
        image_before: require("../../../images/laia/game-three/desconsuelo-frog-grey.png"),
        image_after: require("../../../images/laia/game-three/desconsuelo-frog.png"),
        answers: [
            {
                text: "Despair",
                correct: true
            },
            {
                text: "Serene",
                correct: false
            },
            {
                text: "Annoyed",
                correct: false
            }
        ]
    },
    {
        characterName: "Parrot",
        image_before: require("../../../images/laia/game-three/jubilo-parrot-grey.png"),
        image_after: require("../../../images/laia/game-three/jubilo-parrot.png"),
        answers: [
            {
                text: "Furious",
                correct: false
            },
            {
                text: "Gloomy",
                correct: false
            },
            {
                text: "Joyful",
                correct: true
            }
        ]
    },
    {
        characterName: "Giraffe",
        image_before: require("../../../images/laia/game-three/repulsion-giraffe-grey.png"),
        image_after: require("../../../images/laia/game-three/repulsion-giraffe.png"),
        answers: [
            {
                text: "Scared",
                correct: false
            },
            {
                text: "Disgusted",
                correct: true
            },
            {
                text: "Serene",
                correct: false
            }
        ]
    },
    {
        characterName: "Chameleon",
        image_before: require("../../../images/laia/game-three/pena-chameleon-grey.png"),
        image_after: require("../../../images/laia/game-three/pena-chameleon.png"),
        answers: [
            {
                text: "Gloomy",
                correct: true
            },
            {
                text: "Repulsed",
                correct: false
            },
            {
                text: "Cheerful",
                correct: false
            }
        ]
    },
    {
        characterName: "Elephant",
        image_before: require("../../../images/laia/game-three/furia-elephant-grey.png"),
        image_after: require("../../../images/laia/game-three/furia-elephant.png"),
        answers: [
            {
                text: "Tranquil",
                correct: false
            },
            {
                text: "Joyful",
                correct: false
            },
            {
                text: "Furious",
                correct: true
            }
        ]
    },
    {
        characterName: "Koala",
        image_before: require("../../../images/laia/game-three/tranquilidad-koala-grey.png"),
        image_after: require("../../../images/laia/game-three/tranquilidad-koala.png"),
        answers: [
            {
                text: "Scared",
                correct: false
            },
            {
                text: "Tranquil",
                correct: true
            },
            {
                text: "Furious",
                correct: false
            }
        ]
    },
    ////////////////////////////////////////////////////////////////////////////////////////
    {
        characterName: "Frog",
        image_before: require("../../../images/laia/game-three/grima-frog-grey.png"),
        image_after: require("../../../images/laia/game-three/grima-frog.png"),
        answers: [
            {
                text: "Serene",
                correct: false
            },
            {
                text: "Repulsed",
                correct: true
            },
            {
                text: "Joyful",
                correct: false
            }
        ]
    },
    {
        characterName: "Parrot",
        image_before: require("../../../images/laia/game-three/terror-parrot-grey.png"),
        image_after: require("../../../images/laia/game-three/terror-parrot.png"),
        answers: [
            {
                text: "Serene",
                correct: false
            },
            {
                text: "Terrified",
                correct: true
            },
            {
                text: "Despair",
                correct: false
            }
        ]
    },
    {
        characterName: "Giraffe",
        image_before: require("../../../images/laia/game-three/serenidad-giraffe-grey.png"),
        image_after: require("../../../images/laia/game-three/serenidad-giraffe.png"),
        answers: [
            {
                text: "Terrified",
                correct: false
            },
            {
                text: "Repulsed",
                correct: false
            },
            {
                text: "Serene",
                correct: true
            }
        ]
    },
    {
        characterName: "Chameleon",
        image_before: require("../../../images/laia/game-three/felicidad-chameleon-grey.png"),
        image_after: require("../../../images/laia/game-three/felicidad-chameleon.png"),
        answers: [
            {
                text: "Cheerful",
                correct: true
            },
            {
                text: "Annoyed",
                correct: false
            },
            {
                text: "Despair",
                correct: false
            }
        ]
    },
    {
        characterName: "Elephant",
        image_before: require("../../../images/laia/game-three/susto-elephant-grey.png"),
        image_after: require("../../../images/laia/game-three/susto-elephant.png"),
        answers: [
            {
                text: "Cheerful",
                correct: false
            },
            {
                text: "Scared",
                correct: true
            },
            {
                text: "Tranquil",
                correct: false
            }
        ]
    },
    {
        characterName: "Koala",
        image_before: require("../../../images/laia/game-three/enojo-koala-grey.png"),
        image_after: require("../../../images/laia/game-three/enojo-koala.png"),
        answers: [
            {
                text: "Scared",
                correct: false
            },
            {
                text: "Cheerful",
                correct: false
            },
            {
                text: "Annoyed",
                correct: true
            }
        ]
    }
];
