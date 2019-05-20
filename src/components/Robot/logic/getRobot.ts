import { IRobotEmotion } from "../robotImages";

// export const getRobot: (
//     currentEmotion: IRobotEmotion,
//     intensity: number
// ) => number = (currentEmotion: IRobotEmotion, intensity: number) => {
//     switch (currentEmotion) {
//         case "happy":
//             return robots.yellow[intensity];
//         case "rage":
//             return robots.red[intensity];
//         case "disgust":
//             return robots.green[intensity];
//         case "sad":
//             return robots.blue[intensity];
//         case "calm":
//             return robots.pink[intensity];
//         case "fear":
//             return robots.purple[intensity];
//         default:
//             return robots.grey[0];
//     }
// };

// export const getRobot_new: (
//     currentEmotion: IRobotEmotion,
//     robotState: "correct" | "incorrect" | "neutral"
// ) => number[] = (
//     currentEmotion: IRobotEmotion,
//     robotState: "correct" | "incorrect" | "neutral"
// ) => {
//         switch (currentEmotion) {
//             case "happy":
//                 return robots_new[robotState].yellow;
//             case "rage":
//                 return robots_new[robotState].red;
//             case "disgust":
//                 return robots_new[robotState].green;
//             case "sad":
//                 return robots_new[robotState].blue;
//             case "calm":
//                 return robots_new[robotState].pink;
//             case "fear":
//                 return robots_new[robotState].purple;
//             default:
//                 return robots_new[robotState].grey;
//         }
//     };

const robots = {
    calm: require("../../../images/laia/robot-game/2019/neutral_neutral.png"),
    disgust: require("../../../images/laia/robot-game/2019/neutral_disgust.png"),
    fear: require("../../../images/laia/robot-game/2019/neutral_fear.png"),
    happy: require("../../../images/laia/robot-game/2019/neutral_happy.png"),
    rage: require("../../../images/laia/robot-game/2019/neutral_angry.png"),
    sad: require("../../../images/laia/robot-game/2019/neutral_sad.png"),
    neutral: require("../../../images/laia/robot-game/2019/neutral_sad.png")
}


const incorrect: (clickedRobot: number, answerRobot: number) => number[] = (clickedRobot, answerRobot) => {

    return [
        clickedRobot,
        clickedRobot,
        clickedRobot,
        clickedRobot,
        require("../../../images/laia/robot-game/2019/incorrect_en_frame1.png"),
        require("../../../images/laia/robot-game/2019/incorrect_en_frame2.png"),
        require("../../../images/laia/robot-game/2019/incorrect_en_frame1.png"),
        require("../../../images/laia/robot-game/2019/incorrect_en_frame2.png"),
        require("../../../images/laia/robot-game/2019/incorrect_en_frame1.png"),
        require("../../../images/laia/robot-game/2019/incorrect_en_frame2.png"),
        answerRobot,
        answerRobot,
        answerRobot,
        answerRobot,
    ]
}
const correct: (clickedRobot: number, answerRobot: number) => number[] = (clickedRobot, answerRobot) => [
    clickedRobot,
    clickedRobot,
    clickedRobot,
    clickedRobot,
    require("../../../images/laia/robot-game/2019/correct_en_frame1.png"),
    require("../../../images/laia/robot-game/2019/correct_en_frame2.png"),
    require("../../../images/laia/robot-game/2019/correct_en_frame3.png"),
    require("../../../images/laia/robot-game/2019/correct_en_frame2.png"),
    require("../../../images/laia/robot-game/2019/correct_en_frame3.png"),
    answerRobot,
    answerRobot,
    answerRobot,
    answerRobot,

]

const getClickedRobot: (clickedRobot: IRobotEmotion) => number = (clickedRobot) => {
    switch (clickedRobot) {
        default:
        case "calm": return robots.calm
        case "disgust": return robots.disgust
        case "fear": return robots.fear
        case "happy": return robots.happy
        case "rage": return robots.rage
        case "sad": return robots.sad
    }
}

export const getRobot: (clickedEmotion: IRobotEmotion, currentEmotion: IRobotEmotion, robotState: "correct" | "incorrect" | "neutral") => number[] = (clickedEmotion, currentEmotion, robotState) => {

    const clickedRobot = getClickedRobot(clickedEmotion)
    if (robotState === "correct") {
        switch (currentEmotion) {
            default:
            case "calm": return correct(clickedRobot, robots.calm)
            case "disgust": return correct(clickedRobot, robots.disgust)
            case "fear": return correct(clickedRobot, robots.fear)
            case "happy": return correct(clickedRobot, robots.happy)
            case "rage": return correct(clickedRobot, robots.rage)
            case "sad": return correct(clickedRobot, robots.sad)
        }
    } else if (robotState === "incorrect") {
        switch (currentEmotion) {
            default:
            case "calm": return incorrect(clickedRobot, robots.calm)
            case "disgust": return incorrect(clickedRobot, robots.disgust)
            case "fear": return incorrect(clickedRobot, robots.fear)
            case "happy": return incorrect(clickedRobot, robots.happy)
            case "rage": return incorrect(clickedRobot, robots.rage)
            case "sad": return incorrect(clickedRobot, robots.sad)
        }
    } else {
        return [require("../../../images/laia/robot-game/2019/neutral_empty.png")]
    }
}