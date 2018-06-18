//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import { IFruit } from "./FruitActivity";
import { TabContents } from "./TabContents";
//Interface
interface IFruitTabProps {
    tabOnTop: IFruit;
    onTabPress: any;
}

interface IFruitTab {
    source: number;
    contentSource: number[];
    oldContentSource: number;
    name: IFruit;
}

const fruitTabs: IFruitTab[] = [
    {
        source: require("../../images/laia/fruit-activity/tabs/faces-tab.png"),
        name: "faces",
        contentSource: [
            require("../../images/laia/fruit-activity/faces/face-1.png"),
            require("../../images/laia/fruit-activity/faces/face-2.png"),
            require("../../images/laia/fruit-activity/faces/face-3.png")
        ],
        oldContentSource: require("../../images/laia/fruit-activity/tabs/faces.png")
    },
    {
        source: require("../../images/laia/fruit-activity/tabs/eyes-tab.png"),
        name: "eyes",
        contentSource: [
            require("../../images/laia/fruit-activity/eyes/eyes-1.png"),
            require("../../images/laia/fruit-activity/eyes/eyes-2.png"),
            require("../../images/laia/fruit-activity/eyes/eyes-3.png"),
            require("../../images/laia/fruit-activity/eyes/eyes-4.png"),
            require("../../images/laia/fruit-activity/eyes/eyes-5.png"),
            require("../../images/laia/fruit-activity/eyes/eyes-6.png")
        ],
        oldContentSource: require("../../images/laia/fruit-activity/tabs/eyes.png")
    },
    {
        source: require("../../images/laia/fruit-activity/tabs/mouths-tab.png"),
        name: "mouths",
        contentSource: [
            require("../../images/laia/fruit-activity/mouths/mouths-1.png"),
            require("../../images/laia/fruit-activity/mouths/mouths-2.png"),
            require("../../images/laia/fruit-activity/mouths/mouths-3.png"),
            require("../../images/laia/fruit-activity/mouths/mouths-4.png"),
            require("../../images/laia/fruit-activity/mouths/mouths-5.png"),
            require("../../images/laia/fruit-activity/mouths/mouths-6.png")
        ],
        oldContentSource: require("../../images/laia/fruit-activity/tabs/mouths.png")
    }
];

// create a component
export const FruitTab: React.StatelessComponent<IFruitTabProps> = (
    props: IFruitTabProps
) => {
    const switchTab: (tabOnTop: IFruit) => IFruitTab[] = (tabOnTop: IFruit) => {
        const newTopTab = fruitTabs.filter(fruit => fruit.name === tabOnTop);
        // console.log("New top tab: ", newTopTab);
        const oldTabs = fruitTabs.filter(fruit => fruit.name !== tabOnTop);
        // console.log("Old tabs: ", oldTabs);
        const newTabbies = newTopTab.concat(oldTabs).reverse();
        // console.log("New tabbies: ", newTabbies);

        return newTabbies;
    };

    const getOnPress = (tabName: IFruit) => {
        return () => props.onTabPress(tabName);
    };

    const getTabs = () => {
        return switchTab(props.tabOnTop).map((tab, i) => {
            console.log("Switch tab tab: ", tab);
            return (
                <View style={styles.tab} key={i}>
                    <Image
                        style={styles.tab}
                        source={tab.source}
                        resizeMode="stretch"
                    />
                    {/* <Image
                        style={styles.tabContent}
                        source={tab.oldContentSource}
                        resizeMode="stretch"
                    /> */}
                    {tab.name === props.tabOnTop ? (
                        <TabContents contents={tab.contentSource} />
                    ) : null}
                </View>
            );
        });
    };
    return (
        <View style={styles.container}>
            {getTabs()}
            <View style={styles.invisibleButtonContainer}>
                <TouchableWithoutFeedback
                    onPress={() => props.onTabPress("faces")}
                >
                    <View style={styles.invisibleButton} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => props.onTabPress("eyes")}
                >
                    <View style={styles.invisibleButton} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => props.onTabPress("mouths")}
                >
                    <View style={styles.invisibleButton} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: "35%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    tab: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    tabContent: {
        width: "85%",
        height: "65%",
        marginBottom: 5
    },
    invisibleButtonContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    invisibleButton: {
        flex: 1,
        backgroundColor: "palevioletred",
        opacity: 0,
        marginHorizontal: 1
    }
});
