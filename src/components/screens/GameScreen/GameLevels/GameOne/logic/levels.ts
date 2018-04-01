export interface ILaiaGameLevel {
    image_before: number;
    image_after: number;
    answers: { text: string; correct: boolean }[];
}

export const levels: ILaiaGameLevel[] = [
    {
        image_before: require("../../../../../../images/laia/kid1_bw.png"),
        image_after: require("../../../../../../images/laia/kid1.png"),
        answers: [
            { text: "Happy", correct: true },
            { text: "Unhappy", correct: false },
            { text: "Sad", correct: false },
            { text: "Hungry", correct: false }
        ]
    },
    {
        image_before: require("../../../../../../images/laia/kid2_bw.png"),
        image_after: require("../../../../../../images/laia/kid2.png"),
        answers: [
            { text: "Joyous", correct: false },
            { text: "Sad", correct: false },
            { text: "Terrified", correct: true },
            { text: "Angry", correct: false }
        ]
    },
    {
        image_before: require("../../../../../../images/laia/kid3_bw.png"),
        image_after: require("../../../../../../images/laia/kid3.png"),
        answers: [
            { text: "Content", correct: false },
            { text: "Disgusted", correct: true },
            { text: "Embarrassed", correct: false },
            { text: "Confused", correct: false }
        ]
    },
    {
        image_before: require("../../../../../../images/laia/kid4_bw.png"),
        image_after: require("../../../../../../images/laia/kid4.png"),
        answers: [
            { text: "Angry", correct: false },
            { text: "Sad", correct: false },
            { text: "Confused", correct: false },
            { text: "Calm", correct: true }
        ]
    },
    {
        image_before: require("../../../../../../images/laia/kid5_bw.png"),
        image_after: require("../../../../../../images/laia/kid5.png"),
        answers: [
            { text: "Content", correct: false },
            { text: "Disgusted", correct: false },
            { text: "Confused", correct: false },
            { text: "Sad", correct: true }
        ]
    },
    {
        image_before: require("../../../../../../images/laia/kid6_bw.png"),
        image_after: require("../../../../../../images/laia/kid6.png"),
        answers: [
            { text: "Happy", correct: false },
            { text: "Angry", correct: true },
            { text: "Embarrassed", correct: false },
            { text: "Terrified", correct: false }
        ]
    }
];
