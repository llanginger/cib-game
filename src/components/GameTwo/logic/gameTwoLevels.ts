export interface IGameTwoLevel {
    image_before: number;
    image_after: number;
    answers: { text: string; correct: boolean }[];
}

export const gameTowLevels: IGameTwoLevel[] = [
    {
        image_before: require("../../../images/laia/game-two/marta-sad-grey.png"),
        image_after: require("../../../images/laia/game-two/marta-sad.png"),
        answers: [
            { text: "Happy", correct: true },
            { text: "Unhappy", correct: false },
            { text: "Sad", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/sofia-sad-grey.png"),
        image_after: require("../../../images/laia/game-two/sofia-sad.png"),
        answers: [
            { text: "Joyous", correct: false },
            { text: "Sad", correct: false },
            { text: "Terrified", correct: true }
        ]
    }
];
