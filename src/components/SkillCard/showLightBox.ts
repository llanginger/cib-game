import { ISkill } from "../SkillRecapScreen/logic/skills";
import { screenObjects } from "../../navigation/screenObjects";
export const showLightBox = (navigator, props: ISkill) => {
    return navigator.showLightBox({
        ...screenObjects.SKILLCARD_MODAL,
        passProps: { skill: props },
        style: {
            backgroundBlur: "none"
        }
    });
};
