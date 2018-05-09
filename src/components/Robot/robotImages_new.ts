export type IRobot_new = number[];

export interface IRobotType {
    grey: IRobot_new;
    red: IRobot_new;
    pink: IRobot_new;
    green: IRobot_new;
    yellow: IRobot_new;
    blue: IRobot_new;
    purple: IRobot_new;
}

export type IRobotAnswerType = "correct" | "incorrect" | "neutral";

export interface IRobots_new {
    correct: IRobotType;
    incorrect: IRobotType;
    neutral: IRobotType;
}

export const robots_new: IRobots_new = {
    correct: {
        grey: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        red: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        pink: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        green: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        yellow: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        purple: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ],
        blue: [
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-correct-frame2.png")
        ]
    },
    incorrect: {
        grey: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        red: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        pink: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        green: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        yellow: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        purple: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ],
        blue: [
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame1.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-incorrect-frame2.png")
        ]
    },
    neutral: {
        grey: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        red: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        pink: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        green: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        yellow: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        purple: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ],
        blue: [
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png"),
            require("../../images/laia/robot-game/robot/robot-body/robot-neutral.png")
        ]
    }
};
