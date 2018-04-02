export interface ILaiaGameLevel {
    image_before: number;
    image_after: number;
    answers: { text: string; correct: boolean }[];
}

export const gameOneLevels: ILaiaGameLevel[] = [
    {
        image_before: require("../../../images/laia/kid1_bw.png"),
        image_after: require("../../../images/laia/kid1.png"),
        answers: [{ text: "Happy", correct: true }]
    },
    {
        image_before: require("../../../images/laia/kid2_bw.png"),
        image_after: require("../../../images/laia/kid2.png"),
        answers: [{ text: "Terrified", correct: true }]
    },
    {
        image_before: require("../../../images/laia/kid3_bw.png"),
        image_after: require("../../../images/laia/kid3.png"),
        answers: [{ text: "Disgusted", correct: true }]
    },
    {
        image_before: require("../../../images/laia/kid4_bw.png"),
        image_after: require("../../../images/laia/kid4.png"),
        answers: [{ text: "Calm", correct: true }]
    },
    {
        image_before: require("../../../images/laia/kid5_bw.png"),
        image_after: require("../../../images/laia/kid5.png"),
        answers: [{ text: "Sad", correct: true }]
    },
    {
        image_before: require("../../../images/laia/kid6_bw.png"),
        image_after: require("../../../images/laia/kid6.png"),
        answers: [{ text: "Angry", correct: true }]
    }
];
