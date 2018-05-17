//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar
} from "react-native";
import { screenObjects } from "../../navigation/screenObjects";
import { appStyles } from "../../styles/styles";
import { TwoFrameTouchable } from "../TwoFrameTouchable/TwoFrameTouchable";

//Interfaces
interface IMenuScreenProps {
    navigator?: any;
}

interface IMenuScreenState {}

// create a component

export class MenuScreen extends React.Component<
    IMenuScreenProps,
    IMenuScreenState
> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                this.props.navigator.toggleDrawer({
                    side: "left", // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    render() {
        const { push, resetTo } = this.props.navigator;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <TwoFrameTouchable
                    sources={[
                        require("../../images/laia/menu/window-frame1.png"),
                        require("../../images/laia/menu/window-frame2.png")
                    ]}
                    text="Games"
                    textStyle={{ fontSize: 24, left: 50, top: 110 }}
                    containerStyle={styles.window}
                    onPress={() =>
                        this.props.navigator.push({
                            screen: "GameMap",
                            animated: true,
                            animationType: "fade"
                        })
                    }
                />
                <View pointerEvents="none">
                    <Image
                        style={styles.roomBackground}
                        source={require("../../images/laia/menu/room.png")}
                        resizeMode="cover"
                    />
                </View>
                <TwoFrameTouchable
                    onPress={() => console.log("Pressed the thing!")}
                    text="Journal"
                    textStyle={{}}
                    sources={[
                        require("../../images/laia/menu/journal-frame1.png"),
                        require("../../images/laia/menu/journal-frame2.png")
                    ]}
                    containerStyle={styles.journal}
                />
                <TwoFrameTouchable
                    sources={[
                        require("../../images/laia/menu/panda-frame1.png"),
                        require("../../images/laia/menu/panda-frame2.png")
                    ]}
                    text="Chill Out"
                    textStyle={{ top: -20, left: 0 }}
                    containerStyle={styles.panda}
                    onPress={() => console.log("Pressed the thing!")}
                />
                <TwoFrameTouchable
                    onPress={() => console.log("Pressed the thing!")}
                    sources={[
                        require("../../images/laia/menu/magnifyingGlasse-frame1.png"),
                        require("../../images/laia/menu/magnifyingGlasse-frame2.png")
                    ]}
                    text="Memory"
                    textStyle={{ bottom: 20, right: 0 }}
                    containerStyle={styles.magnifyingGlass}
                />
                <TwoFrameTouchable
                    onPress={() => console.log("Pressed the thing!")}
                    sources={[
                        require("../../images/laia/menu/pencil-frame1.png"),
                        require("../../images/laia/menu/pencil-frame2.png")
                    ]}
                    text="Notes"
                    textStyle={{ top: 20 }}
                    containerStyle={styles.pencil}
                />
                <TwoFrameTouchable
                    onPress={() => console.log("Pressed the thing!")}
                    sources={[
                        require("../../images/laia/menu/banner-frame1.png"),
                        require("../../images/laia/menu/banner-frame2.png")
                    ]}
                    text="Word Play"
                    textStyle={{ left: 80, top: 170, fontSize: 20 }}
                    containerStyle={styles.banner}
                />
                <TwoFrameTouchable
                    onPress={() => console.log("Pressed the thing!")}
                    sources={[
                        require("../../images/laia/menu/picture-frame1.png"),
                        require("../../images/laia/menu/picture-frame2.png")
                    ]}
                    text="Me"
                    textStyle={{ bottom: -20 }}
                    containerStyle={styles.picture}
                />
            </View>
        );
    }
}
const windowDims = 200;
const journalDims = 230;
const pandaDims = 140;
const magnifyingGlassDims = 120;
const pencilDims = 110;
const bannerDims = 400;
const pictureDims = 90;
// define your styles
const styles = StyleSheet.create({
    container: {
        height: "101%",
        marginTop: -1,
        width: "100%",
        position: "relative"
        // flex: 1
    },
    roomBackground: {
        height: "100%",
        width: "100%"
    },
    window: {
        position: "absolute",
        top: 10,
        left: 10,
        height: windowDims,
        width: windowDims
    },
    journal: {
        position: "absolute",
        bottom: 0,
        right: 15,
        height: journalDims,
        width: journalDims
    },
    panda: {
        position: "absolute",
        bottom: 230,
        left: 15,
        height: pandaDims,
        width: pandaDims
    },
    magnifyingGlass: {
        position: "absolute",
        bottom: 125,
        left: 50,
        height: magnifyingGlassDims,
        width: magnifyingGlassDims
    },
    pencil: {
        position: "absolute",
        bottom: 163,
        right: 45,
        height: pencilDims,
        width: pencilDims
    },
    banner: {
        position: "absolute",
        bottom: 395,
        right: -190,
        height: bannerDims,
        width: bannerDims
    },
    picture: {
        position: "absolute",
        bottom: 385,
        left: 120,
        height: pictureDims,
        width: pictureDims
    }
});
