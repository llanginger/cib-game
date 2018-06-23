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
import { IFruitTabName } from "./FruitActivity";
import { TabContents } from "./TabContents";
import { EyesTab } from "./EyesTab";
import { MouthsTab } from "./MouthsTab";
import { FacesTab } from "./FacesTab";
//Interface
interface IFruitTabProps {
    tabOnTop: IFruitTabName;
    onTabPress: any;
    onChooseFruit: any;
    currentFruit: "apple" | "banana" | "pear";
}

export interface IFruitTab {
    source: number;
    contentSource: number[];
    name: IFruitTabName;
    key?: number;
    component?: any;
}

interface IFruitTabState {
    currentFruit: "apple" | "banana" | "pear";
    tabs: IFruitTab[];
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
        key: 1
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
        key: 2
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
        key: 3
    }
];

// create a component
export class FruitTab extends React.Component<IFruitTabProps, IFruitTabState> {
    constructor(props) {
        super(props);

        this.state = {
            currentFruit: "apple",
            tabs: [
                {
                    source: require("../../images/laia/fruit-activity/tabs/faces-tab.png"),
                    name: "faces",
                    contentSource: [
                        require("../../images/laia/fruit-activity/faces/face-1.png"),
                        require("../../images/laia/fruit-activity/faces/face-2.png"),
                        require("../../images/laia/fruit-activity/faces/face-3.png")
                    ],
                    key: 1
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
                    key: 2
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
                    key: 3
                }
            ]
        };
    }
    _switchTab: (tabOnTop: IFruitTabName) => IFruitTab[] = (
        tabOnTop: IFruitTabName
    ) => {
        const newTopTab = fruitTabs.filter(fruit => fruit.name === tabOnTop);

        const oldTabs = fruitTabs.filter(fruit => fruit.name !== tabOnTop);

        const newTabbies = newTopTab.concat(oldTabs).reverse();
        // console.log("New tabbies: ", newTabbies);

        return newTabbies;
    };

    _chooseTabContainer: (tabName: IFruitTabName) => any = (
        tabName: IFruitTabName
    ) => {
        switch (tabName) {
            case "eyes":
                return <EyesTab fruit={this.props.currentFruit} />;
            case "mouths":
                return <MouthsTab fruit={this.props.currentFruit} />;
            case "faces":
                return <FacesTab onChooseFruit={this.props.onChooseFruit} />;
        }
    };
    render() {
        const getOnPress = (tabName: IFruitTabName) => {
            return () => this.props.onTabPress(tabName);
        };

        const getTabs = () => {
            return this._switchTab(this.props.tabOnTop).map((tab, i) => {
                console.log("Switch tab tab: ", tab);
                return (
                    <View style={styles.tab} key={tab.key}>
                        <Image
                            style={styles.tab}
                            source={tab.source}
                            resizeMode="stretch"
                        />
                        {this._chooseTabContainer(tab.name)}
                    </View>
                );
            });
        };
        return (
            <View style={styles.container}>
                {getTabs()}
                <View style={styles.invisibleButtonContainer}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onTabPress("faces")}
                    >
                        <View style={styles.invisibleButton} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onTabPress("eyes")}
                    >
                        <View style={styles.invisibleButton} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.onTabPress("mouths")}
                    >
                        <View style={styles.invisibleButton} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

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
