export interface IGameTwoLevel {
    image_before: number;
    image_after: number;
    answers: { text: string; correct: boolean }[];
}

export const gameTwoLevels: IGameTwoLevel[] = [
    {
        image_before: require("../../../images/laia/game-two/marta-sad-grey.png"),
        image_after: require("../../../images/laia/game-two/marta-sad.png"),
        answers: [
            { text: "Happy", correct: false },
            { text: "Terrified", correct: false },
            { text: "Sad", correct: true }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/happy-ogre-grey.png"),
        image_after: require("../../../images/laia/game-two/happy-ogre.png"),
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
            { text: "Sad", correct: true },
            { text: "Terrified", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/jorge-calm-grey.png"),
        image_after: require("../../../images/laia/game-two/jorge-calm.png"),
        answers: [
            { text: "Joyous", correct: false },
            { text: "Calm", correct: true },
            { text: "Terrified", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/marta-disgust-grey.png"),
        image_after: require("../../../images/laia/game-two/marta-disgust.png"),
        answers: [
            { text: "Joyous", correct: false },
            { text: "Calm", correct: false },
            { text: "Disgusted", correct: true }
        ]
    }
];
