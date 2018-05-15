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
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image
                    style={styles.window}
                    source={require("../../images/laia/menu/window-frame1.png")}
                    resizeMode="contain"
                />
                <Image
                    style={styles.roomBackground}
                    source={require("../../images/laia/menu/room.png")}
                    resizeMode="cover"
                />
                <Image
                    style={styles.journal}
                    source={require("../../images/laia/menu/journal-frame1.png")}
                    resizeMode="contain"
                />
            </View>
        );
    }
}
const windowDims = 200;
const journalDims = 230;
// define your styles
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
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
    }
});
