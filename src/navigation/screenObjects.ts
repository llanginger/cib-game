export interface INavigationObject {
    screen: string;
    title?: string;
    icon?: string;
    label?: string;
    passProps?: {};
    animated?: boolean;
    animationType?: "fade" | "slide-horizontal";
    navigatorStyle?: {};
    navigatorButtons?: {};
}

export interface IScreenObjects {
    LOGIN_SCREEN: INavigationObject;
    GAME_CONTAINER_SCREEN: INavigationObject;
    DRAWER_SCREEN: INavigationObject;
    SKILL_RECAP_SCREEN: INavigationObject;
    SCORE_SCREEN: INavigationObject;
    ACCOUNT_SCREEN: INavigationObject;
    SKILLCARD_MODAL: INavigationObject;
    CHARACTER_SELECT_SCREEN: INavigationObject;
    SET_LEVEL_SCREEN: INavigationObject;
    MENU_SCREEN: INavigationObject;
}

export const screenObjects: IScreenObjects = {
    LOGIN_SCREEN: {
        screen: "LoginScreen",
        title: "Login",
        label: "Login"
    },
    GAME_CONTAINER_SCREEN: {
        screen: "GameContainerScreen",
        title: "",
        label: ""
    },
    DRAWER_SCREEN: {
        screen: "DrawerScreen",
        title: "Menu",
        label: "Menu"
    },
    SKILL_RECAP_SCREEN: {
        screen: "SkillRecapScreen",
        title: "Skill Recap",
        label: "Skill Recap"
    },
    SCORE_SCREEN: {
        screen: "ScoreScreen",
        title: "Score",
        label: "Score"
    },
    ACCOUNT_SCREEN: {
        screen: "AccountScreen",
        title: "Account",
        label: "Account"
    },
    SKILLCARD_MODAL: {
        screen: "SkillCardModalScreen"
    },
    CHARACTER_SELECT_SCREEN: {
        screen: "CharacterSelectScreen",
        title: "Select Character"
    },
    SET_LEVEL_SCREEN: {
        screen: "SetLevelScreen",
        title: "Change Level"
    },
    MENU_SCREEN: {
        screen: "MenuScreen",
        title: "Menu"
    }
};
