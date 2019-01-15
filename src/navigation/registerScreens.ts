import { Navigation } from "react-native-navigation";

import { CharacterSelectScreen } from "../components/CharacterSelectScreen/CharacterSelectScreen";
import { SkillRecapScreen } from "../components/SkillRecapScreen/SkillRecapScreen";
import { DrawerScreen } from "../components/DrawerScreen/DrawerScreen";
import { GameContainerScreen } from "../components/GameContainerScreen/GameContainerScreen";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { SkillCardModalScreen } from "../components/SkillCardModalScreen/SkillCardModalScreen";
import { AccountScreen } from "../components/AccountScreen/AccountScreen";
import { ScoreScreen } from "../components/ScoreScreen/ScoreScreen";
import { SetLevel } from "../components/DrawerScreen/SetLevel";
import { MenuScreen } from "../components/MenuScreen/MenuScreen";
import { GameMap } from "../components/GameMap/GameMap";
import { FruitActivity } from "../components/FruitActivity/FruitActivity";
import { HangmanScreen } from "../components/HangmanScreen/HangmanScreen"
import { RocketActivityScreen } from "../components/RocketActivityScreen/RocketActivityScreen"

import { PandaActivity } from "../components/PandaActivity/PandaActivity";

import { AudioScreen } from "../components/AudioScreen/AudioScreen"

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent(
        "AudioScreen",
        () => AudioScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "RocketActivityScreen",
        () => RocketActivityScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "HangmanScreen",
        () => HangmanScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "LoginScreen",
        () => LoginScreen,
        store,
        Provider
    );
    Navigation.registerComponent(
        "FruitActivity",
        () => FruitActivity,
        store,
        Provider
    );
    Navigation.registerComponent(
        "MenuScreen",
        () => MenuScreen,
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
    Navigation.registerComponent(
        "SetLevelScreen",
        () => SetLevel,
        store,
        Provider
    );
    Navigation.registerComponent("GameMap", () => GameMap, store, Provider);
    Navigation.registerComponent(
        "PandaActivity",
        () => PandaActivity,
        store,
        Provider
    );
};
