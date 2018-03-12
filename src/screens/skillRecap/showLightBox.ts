import { ISkill } from "./skills"
export const showLightBox = (navigator, props: ISkill) => {

    return navigator.showLightBox({
        screen: "SkillCardLightboxScreen",
        passProps: { skill: props },
        style: {
            backgroundBlur: "none",

        }
    })
}