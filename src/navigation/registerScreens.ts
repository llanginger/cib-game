import { Navigation } from "react-native-navigation";

import { CharacterSelect } from "../components/screens/CharacterSelect/CharacterSelect";
import { SkillRecapScreen } from "../components/screens/SkillRecapScreen/SkillRecapScreen";
import { DrawerScreen } from "../components/screens/DrawerScreen/DrawerScreen";
import { HomeScreen } from "../components/screens/GameScreen/GameContainerScreen";
import { LoginScreen } from "../components/screens/LoginScreen/LoginScreen";
import { SkillCardLightboxScreen } from "../components/screens/SkillRecapScreen/components/SkillCardLightboxScreen";
import { AccountScreen } from "../components/screens/AccountScreen/AccountScreen";
import { LaiaScoreScreen } from "../components/screens/GameScreen/GameLevels/GameOne/LaiaScoreScreen";

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent(
        "LoginScreen",
        () => LoginScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "HomeScreen",
        () => HomeScreen,
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
        "LaiaScoreScreen",
        () => LaiaScoreScreen,
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
        "SkillCardLightboxScreen",
        () => SkillCardLightboxScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "CharacterSelect",
        () => CharacterSelect,
        store,
        Provider
    );
};
