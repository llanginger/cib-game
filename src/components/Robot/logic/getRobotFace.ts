import { robotFaces, IRobotFace } from "../robotImages";
import { IRobotEmotion } from "../robotImages";

export const getRobotFace: (currentEmotion: IRobotEmotion) => number = (
    currentEmotion: IRobotEmotion
) => {
    return robotFaces.filter(face => {
        return face.emotion === currentEmotion;
    })[0].source;
};
