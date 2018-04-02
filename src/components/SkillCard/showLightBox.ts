import { ISkill } from "../SkillRecapScreen/logic/skills"
export const showLightBox = (navigator, props: ISkill) => {

    return navigator.showLightBox({
        screen: "SkillCardModalScreen",
        passProps: { skill: props },
        style: {
            backgroundBlur: "none",

        }
    })
}