//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { screenObjects } from "../../navigation/screenObjects";
import { Apple } from "./Apple";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

const windowDimensions = Dimensions.get("window");
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

interface IAppleProps {
    position: {
        bottom: number;
        left: number;
    };
    onPress: any;
}
//Interfaces
interface IGameMapProps {
    navigator?: any;
    dispatch?: any;
    apples: IAppleProps[];
}

interface IGameMapState {}

const apple = require("../../images/laia/game-map/apple.png");

const applePositions: IAppleProps[] = [
    {
        position: {
            bottom: windowHeight * 0.265,
            left: windowWidth * 0.125
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    },
    {
        position: {
            bottom: windowHeight * 0.32,
            left: windowWidth * 0.755
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    },
    {
        position: {
            bottom: windowHeight * 0.418,
            left: windowWidth * 0.43
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    },
    {
        position: {
            bottom: windowHeight * 0.544,
            left: windowWidth * 0.15
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    },
    {
        position: {
            bottom: windowHeight * 0.59,
            left: windowWidth * 0.665
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    },
    {
        position: {
            bottom: windowHeight * 0.69,
            left: windowWidth * 0.4
        },
        onPress: () =>
            this.props.navigator.push({
                screen: "GameContainerScreen",
                animated: true
            })
    }
];

// create a component

export class _GameMap extends React.Component<IGameMapProps, IGameMapState> {
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

    _menuPress = () => {
        setTimeout(
            () =>
                this.props.navigator.resetTo({
                    screen: "MenuScreen",
                    animated: true,
                    animationType: "fade"
                }),
            200
        );
    };

    _goToStart = () => {
        setTimeout(
            () =>
                // this.props.navigator.push({
                //     screen: "GameContainerScreen",
                //     animated: true
                // }),
                this.props.navigator.dismissAllModals(),
            300
        );
    };

    _gotToTutorial = () => {
        this.props.dispatch({
            type: "SET_LEVEL_TO",
            payload: {
                nextLevel: 0
            }
        });
        setTimeout(
            () =>
                this.props.navigator.push({
                    screen: "GameContainerScreen",
                    animated: true
                }),
            500
        );
    };

    _makeApples = () => {
        return this.props.apples.map((apple, i) => {
            return (
                <Apple
                    onPress={() => {
                        this.props.dispatch({
                            type: "SET_LEVEL_TO",
                            payload: {
                                nextLevel: i + 1
                            }
                        });
                        setTimeout(
                            () =>
                                this.props.navigator.push({
                                    screen: "GameContainerScreen",
                                    animated: true
                                }),
                            500
                        );
                    }}
                    key={i}
                    imageStyle={apple.position}
                />
            );
        });
    };

    render() {
        console.log("Props: ", this.props);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require("../../images/laia/game-map/map-tutorial.png")}
                    resizeMode="cover"
                />
                <TouchableOpacity onPressOut={this._gotToTutorial}>
                    <Image
                        source={require("../../images/laia/game-map/star.png")}
                        resizeMode="contain"
                        style={styles.star}
                    />
                </TouchableOpacity>
                {this._makeApples()}
                <ScoreContainer
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        // apples: applePositions.slice(0, state.userReducer.completedLevels + 1)
        apples: applePositions
    };
};

export const GameMap = connect(mapStateToProps)(_GameMap);

const starDims = 80;
// define your styles
const styles = StyleSheet.create({
    container: {
        // justifyContent: "center",
        // alignItems: "center"
    },
    background: {
        height: "100%",
        width: "102%",
        marginLeft: "-1%"
    },
    star: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.05,
        left: windowWidth * 0.5
    },
    levelOneApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.265,
        left: windowWidth * 0.125
    },
    levelTwoApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.32,
        left: windowWidth * 0.755
    },
    levelThreeApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.418,
        left: windowWidth * 0.43
    },
    levelFourApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.544,
        left: windowWidth * 0.15
    },
    levelFiveApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.59,
        left: windowWidth * 0.665
    },
    levelSixApple: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: windowHeight * 0.69,
        left: windowWidth * 0.4
    }
});
