interface IShowLightBoxProps {
    color: string;
    bodyText: { title: string; body: string[] }[];
    headerText: string;
    skillNumber: number;
}

export const showLightBox = (navigator, props: IShowLightBoxProps) => {
    return navigator.showLightBox({
        screen: "SkillCardLightboxScreen",
        passProps: props,
        style: {
            backgroundBlur: "none",

        }
    })
}