import { Navigation } from "react-native-navigation";
import { CharacterSelect } from "../screens/characterSelect/CharacterSelect";
import { SkillRecap } from "../screens/skillRecap/SkillRecap";
import { Menu } from "../screens/menu/Menu";
import { HomeScreen } from "../screens/gameScreens/GameContainer";
import { LoginScreen } from "../screens/loginScreen/LoginScreen";
import { SkillCardLightboxScreen } from "../screens/skillRecap/SkillCardLightboxScreen";
import { AccountScreen } from "../screens/AccountScreen/AccountScreen";
import { LaiaScoreScreen } from "../screens/gameScreens/LaiaScoreScreen";

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
    Navigation.registerComponent("Menu", () => Menu, store, Provider);
    Navigation.registerComponent(
        "SkillRecap",
        () => SkillRecap,
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
