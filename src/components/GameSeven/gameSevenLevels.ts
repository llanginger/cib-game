export interface IGameSevenLevel {
    titleText: string;
    images: number[];
    loop: boolean;
    answers: { text: string; correct: boolean }[];
}

export const gameSevenLevels: IGameSevenLevel[] = [
    {
        titleText: "Arrogant", // Animate once on load, end on last frame
        images: [
            require("../../images/laia/game-7/arrogant-frame1.png"),
            require("../../images/laia/game-7/arrogant-frame2.png")
        ],
        answers: [
            { text: "Arrogant", correct: true },
            { text: "Arrogant", correct: true },
            { text: "Arrogant", correct: true }
        ],
        loop: false
    },
    {
        titleText: "Confident", // Animate on load and until fade out
        images: [
            require("../../images/laia/game-7/confident-frame1.png"),
            require("../../images/laia/game-7/confident-frame2.png")
        ],

        answers: [{ text: "Confident", correct: true }],
        loop: true
    },
    {
        titleText: "Delighted", // Animate on load and until fade out
        images: [
            require("../../images/laia/game-7/delighted-frame1.png"),
            require("../../images/laia/game-7/delighted-frame2.png")
        ],
        answers: [{ text: "Delighted", correct: true }],
        loop: true
    },
    {
        titleText: "Disappointed", // Animate 1 frame on load
        images: [
            require("../../images/laia/game-7/disappointed-frame1.png"),
            require("../../images/laia/game-7/disappointed-frame2.png")
        ],
        answers: [{ text: "Disappointed", correct: true }],
        loop: false
    },
    {
        titleText: "Frustrated", // Animate 1 frame on load
        images: [
            require("../../images/laia/game-7/frustrated-frame1.png"),
            require("../../images/laia/game-7/frustrated-frame2.png")
        ],
        answers: [{ text: "Frustrated", correct: true }],
        loop: false
    },
    {
        titleText: "Furious", // Animate on load and until fade out
        images: [
            require("../../images/laia/game-7/furious-frame1.png"),
            require("../../images/laia/game-7/furious-frame2.png")
        ],
        answers: [{ text: "Furious", correct: true }],
        loop: true
    },
    {
        titleText: "Jealous", // Animate 1 frame
        images: [
            require("../../images/laia/game-7/jealous-frame1.png"),
            require("../../images/laia/game-7/jealous-frame2.png")
        ],
        answers: [{ text: "Jealous", correct: true }],
        loop: false
    },
    {
        titleText: "Left Out", // Animate 1 frame - split out images so background image can keep animating
        images: [
            require("../../images/laia/game-7/leftout-frame1.png"),
            require("../../images/laia/game-7/leftout-frame2.png")
        ],
        answers: [{ text: "Left Out", correct: true }],
        loop: false
    },
    {
        titleText: "Proud", // Animate on load and until fade out
        images: [
            require("../../images/laia/game-7/proud-frame1.png"),
            require("../../images/laia/game-7/proud-frame2.png")
        ],
        answers: [{ text: "Proud", correct: true }],
        loop: true
    },
    {
        titleText: "Shy", // Animate 1 frame
        images: [
            require("../../images/laia/game-7/shy-frame1.png"),
            require("../../images/laia/game-7/shy-frame2.png")
        ],
        answers: [{ text: "Shy", correct: true }],
        loop: false
    },
    {
        titleText: "Surprised", // 1-2-1-1
        images: [
            require("../../images/laia/game-7/surprised-frame1.png"),
            require("../../images/laia/game-7/surprised-frame2.png")
        ],
        answers: [{ text: "Surprised", correct: true }],
        loop: false
    }
];
