import { Navigation } from "react-native-navigation";

import { CharacterSelectScreen } from "../components/CharacterSelectScreen/CharacterSelectScreen";
import { SkillRecapScreen } from "../components/SkillRecapScreen/SkillRecapScreen";
import { DrawerScreen } from "../components/DrawerScreen/DrawerScreen";
import { GameContainerScreen } from "../components/GameContainerScreen/GameContainerScreen";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { SkillCardModalScreen } from "../components/SkillCardModalScreen/SkillCardModalScreen";
import { AccountScreen } from "../components/AccountScreen/AccountScreen";
import { ScoreScreen } from "../components/ScoreScreen/ScoreScreen";

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent(
        "LoginScreen",
        () => LoginScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "GameContainerScreen",
        () => GameContainerScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "DrawerScreen",
        () => DrawerScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "SkillRecapScreen",
        () => SkillRecapScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "ScoreScreen",
        () => ScoreScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "AccountScreen",
        () => AccountScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "SkillCardModalScreen",
        () => SkillCardModalScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "CharacterSelectScreen",
        () => CharacterSelectScreen,
        store,
        Provider
    );
};
