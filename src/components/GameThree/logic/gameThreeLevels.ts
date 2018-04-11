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
    | "Ecstatic"
    | "Furious"
    | "Disgusted"
    | "Terrified"
    | "Cheerful"
    | "Irritated"
    | "Gloomy"
    | "Scared"
    | "Serene"
    | "Anguished"
    | "Repulsed"
    | "Tranquil";

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
                text: "Anguished",
                correct: true
            },
            {
                text: "Cheerful",
                correct: false
            },
            {
                text: "Irritated",
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
                text: "Disgusted",
                correct: false
            },
            {
                text: "Ecstatic",
                correct: true
            }
        ]
    },
    {
        characterName: "Giraffe",
        image_before: require("../../../images/laia/game-three/repulsion-giraffe-grey.png"),
        image_after: require("../../../images/laia/game-three/repulsion-giraffe-grey.png"),
        answers: [
            {
                text: "Ecstatic",
                correct: false
            },
            {
                text: "Disgusted",
                correct: true
            },
            {
                text: "Gloomy",
                correct: false
            }
        ]
    }
];
