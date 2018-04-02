import { IRobotEmotion } from "../../../redux/reducers/index";
import { robots } from "../robotImages";

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
