export type IGameTwoLevelAnswers =
    | "Afraid"
    | "Happy"
    | "Sad"
    | "Disgusted"
    | "Angry"
    | "Calm";

export interface IGameTwoLevel {
    image_before: number;
    image_after: number;
    answers: { text: IGameTwoLevelAnswers; correct: boolean }[];
}

export const gameTwoLevels: IGameTwoLevel[] = [
    {
        image_before: require("../../../images/laia/game-two/jorge-rage-grey.png"),
        image_after: require("../../../images/laia/game-two/jorge-rage.png"),
        answers: [
            { text: "Happy", correct: false },
            { text: "Calm", correct: false },
            { text: "Angry", correct: true }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/marta-sad-grey.png"),
        image_after: require("../../../images/laia/game-two/marta-sad.png"),
        answers: [
            { text: "Afraid", correct: false },
            { text: "Calm", correct: false },
            { text: "Sad", correct: true }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/happy-ogre-grey.png"),
        image_after: require("../../../images/laia/game-two/happy-ogre.png"),
        answers: [
            { text: "Happy", correct: true },
            { text: "Disgusted", correct: false },
            { text: "Angry", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/sofia-sad-grey.png"),
        image_after: require("../../../images/laia/game-two/sofia-sad.png"),
        answers: [
            { text: "Afraid", correct: false },
            { text: "Sad", correct: true },
            { text: "Happy", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/jorge-calm-grey.png"),
        image_after: require("../../../images/laia/game-two/jorge-calm.png"),
        answers: [
            { text: "Afraid", correct: false },
            { text: "Calm", correct: true },
            { text: "Sad", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/marta-disgust-grey.png"),
        image_after: require("../../../images/laia/game-two/marta-disgust.png"),
        answers: [
            { text: "Happy", correct: false },
            { text: "Afraid", correct: false },
            { text: "Disgusted", correct: true }
        ]
    },
    //////////
    {
        image_before: require("../../../images/laia/game-two/fear-fish-grey.png"),
        image_after: require("../../../images/laia/game-two/fear-fish.png"),
        answers: [
            { text: "Afraid", correct: true },
            { text: "Happy", correct: false },
            { text: "Sad", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/max-fear-grey.png"),
        image_after: require("../../../images/laia/game-two/max-fear.png"),
        answers: [
            { text: "Happy", correct: false },
            { text: "Afraid", correct: true },
            { text: "Sad", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/max-rage-grey.png"),
        image_after: require("../../../images/laia/game-two/max-rage.png"),
        answers: [
            { text: "Disgusted", correct: false },
            { text: "Angry", correct: true },
            { text: "Calm", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/maya-disgust-grey.png"),
        image_after: require("../../../images/laia/game-two/maya-disgust.png"),
        answers: [
            { text: "Afraid", correct: false },
            { text: "Angry", correct: false },
            { text: "Disgusted", correct: true }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/maya-happy-grey.png"),
        image_after: require("../../../images/laia/game-two/maya-happy.png"),
        answers: [
            { text: "Angry", correct: false },
            { text: "Sad", correct: false },
            { text: "Happy", correct: true }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/monster-rage-grey.png"),
        image_after: require("../../../images/laia/game-two/monster-rage.png"),
        answers: [
            { text: "Angry", correct: true },
            { text: "Calm", correct: false },
            { text: "Disgusted", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/nico-fear-grey.png"), // Fix this one
        image_after: require("../../../images/laia/game-two/nico-fear.png"),
        answers: [
            { text: "Afraid", correct: true },
            { text: "Happy", correct: false },
            { text: "Angry", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/sofia-calm-grey.png"),
        image_after: require("../../../images/laia/game-two/sofia-calm.png"),
        answers: [
            { text: "Disgusted", correct: false },
            { text: "Calm", correct: true },
            { text: "Afraid", correct: false }
        ]
    },
    {
        image_before: require("../../../images/laia/game-two/nico-happy-grey.png"),
        image_after: require("../../../images/laia/game-two/nico-happy.png"),
        answers: [
            { text: "Sad", correct: false },
            { text: "Happy", correct: true },
            { text: "Angry", correct: false }
        ]
    }
];
