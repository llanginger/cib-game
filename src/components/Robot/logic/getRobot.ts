import { IRobotEmotion } from "../robotImages";
import { robots } from "../robotImages";
import { robots_new } from "../robotImages_new";

export const getRobot: (
    currentEmotion: IRobotEmotion,
    intensity: number
) => number = (currentEmotion: IRobotEmotion, intensity: number) => {
    switch (currentEmotion) {
        case "happy":
            return robots.yellow[intensity];
        case "rage":
            return robots.red[intensity];
        case "disgust":
            return robots.green[intensity];
        case "sad":
            return robots.blue[intensity];
        case "calm":
            return robots.pink[intensity];
        case "fear":
            return robots.purple[intensity];
        default:
            return robots.grey[0];
    }
};

export const getRobot_new: (
    currentEmotion: IRobotEmotion,
    robotState: "correct" | "incorrect" | "neutral"
) => number[] = (
    currentEmotion: IRobotEmotion,
    robotState: "correct" | "incorrect" | "neutral"
) => {
    switch (currentEmotion) {
        case "happy":
            return robots_new[robotState].yellow;
        case "rage":
            return robots_new[robotState].red;
        case "disgust":
            return robots_new[robotState].green;
        case "sad":
            return robots_new[robotState].blue;
        case "calm":
            return robots_new[robotState].pink;
        case "fear":
            return robots_new[robotState].purple;
        default:
            return robots_new[robotState].grey;
    }
};
