import { robotFaces, IRobotFace } from "../robotImages";
import { IRobotEmotion } from "../../../../../../../redux/reducers/index";

export const getRobotFace: (currentEmotion: IRobotEmotion) => number = (
    currentEmotion: IRobotEmotion
) => {
    return robotFaces.filter(face => {
        return face.emotion === currentEmotion;
    })[0].source;
};
