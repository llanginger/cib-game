export type IRobot = [number, number, number];

export interface IRobots {
    red: IRobot;
    green: IRobot;
    yellow: IRobot;
    purple: IRobot;
    blue: IRobot;
    pink: IRobot;
    grey: [number];
}

export const robots: IRobots = {
    red: [
        require("../../images/laia/robot-game/robot/robot-1_level-red_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-red_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-red_1x.png")
    ],
    pink: [
        require("../../images/laia/robot-game/robot/robot-1_level-pink_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-pink_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-pink_1x.png")
    ],
    green: [
        require("../../images/laia/robot-game/robot/robot-1_level-green_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-green_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-green_1x.png")
    ],
    yellow: [
        require("../../images/laia/robot-game/robot/robot-1_level-yellow_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-yellow_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-yellow_1x.png")
    ],
    purple: [
        require("../../images/laia/robot-game/robot/robot-1_level-purple_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-purple_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-purple_1x.png")
    ],
    blue: [
        require("../../images/laia/robot-game/robot/robot-1_level-blue_1x.png"),
        require("../../images/laia/robot-game/robot/robot-2_levels-blue_1x.png"),
        require("../../images/laia/robot-game/robot/robot-full-blue_1x.png")
    ],
    grey: [require("../../images/laia/robot-game/robot/robot-empty_1x.png")]
};
export type IRobotEmotion =
    | "calm"
    | "disgust"
    | "fear"
    | "happy"
    | "rage"
    | "sad";

export const robotEmotions: IRobotEmotion[] = [
    "calm",
    "disgust",
    "fear",
    "happy",
    "rage",
    "sad"
];
export interface IRobotFace {
    source: number;
    emotion: IRobotEmotion;
    intensity: 0 | 1 | 2;
}

export const robotFaces: IRobotFace[] = [
    {
        source: require("../../images/laia/robot-game/robot/faces/face-calm.png"),
        emotion: "calm",
        intensity: 0
    },
    {
        source: require("../../images/laia/robot-game/robot/faces/face-disgust.png"),
        emotion: "disgust",
        intensity: 2
    },
    {
        source: require("../../images/laia/robot-game/robot/faces/face-fear.png"),
        emotion: "fear",
        intensity: 1
    },
    {
        source: require("../../images/laia/robot-game/robot/faces/face-happy.png"),
        emotion: "happy",
        intensity: 2
    },
    {
        source: require("../../images/laia/robot-game/robot/faces/face-rage.png"),
        emotion: "rage",
        intensity: 2
    },
    {
        source: require("../../images/laia/robot-game/robot/faces/face-sad.png"),
        emotion: "sad",
        intensity: 1
    }
];
