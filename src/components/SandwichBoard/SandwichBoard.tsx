import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
    Animated,
    Easing,
    Platform,
    ImageBackground
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

interface ISandwichBoardProps {
    text: string;
    dispatch?: any;
    showPopup?: boolean;
}

interface ISandwichBoardStateProps {
    showPopup: boolean;
}

interface ISandwichBoardState {
    animate: boolean;
    bounceDirection: "in" | "out";
}

class _SandwichBoard extends Component<ISandwichBoardProps, any> {
    private bounceInValue: Animated.Value;
    private bounceOutValue: Animated.Value;

    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            bounceDirection: "in"
        };
        this.bounceInValue = new Animated.Value(0);
        this.bounceOutValue = new Animated.Value(0);
        this._showSandwichBoard = this._showSandwichBoard.bind(this);
        this._hideSandwichBoard = this._hideSandwichBoard.bind(this);
    }

    componentDidMount() {
        this._showSandwichBoard();
    }

    _showSandwichBoard() {
        this.bounceInValue.setValue(0);
        Animated.spring(this.bounceInValue, {
            toValue: 1,
            friction: 5
        }).start(() => this.setState({ bounceDirection: "out" }));
    }

    _hideSandwichBoard() {
        this.bounceOutValue.setValue(0);
        Animated.timing(this.bounceOutValue, {
            toValue: 1,
            duration: 400,
            delay: 700,
            easing: Easing.linear
        }).start(() => this.setState({ bounceDirection: "in" }));
    }

    componentWillReceiveProps(nextProps: ISandwichBoardProps) {
        if (!nextProps.showPopup) {
            this._hideSandwichBoard();
        }
    }

    render() {
        const { text } = this.props;

        const bounceInScale = this.bounceInValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0]
            // outputRange: [0, 0]
        });

        const bounceOutScale = this.bounceOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -500]
            // outputRange: [0, 0]
        });

        const getBounceDirection = () => {
            return this.state.bounceDirection === "in"
                ? bounceInScale
                : bounceOutScale;
        };

        return (
            <Animated.View
                style={[
                    styles.container,
                    {
                        // ...getContainerBorderStyles(),
                        transform: [{ translateY: getBounceDirection() }]
                    }
                ]}
            >
                <Image
                    style={styles.image}
                    source={require("../../images/laia/board-long.png")}
                />
                <View style={styles.textContainer}>
                    <Text numberOfLines={3} style={styles.text}>
                        {text}
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        showPopup: state.sandiwchBoardReducer.showPopup
    };
};

export const SandwichBoard = connect<
    ISandwichBoardStateProps,
    {},
    ISandwichBoardProps
>(mapStateToProps)(_SandwichBoard);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        left: 0,
        right: 0,
        // top: -200,
        top: -130,
        height: 539,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        shadowColor: "rgb(24, 23, 22)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 0.8
        // borderColor: "red",
        // borderWidth: 1
    },
    textContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        bottom: 65,
        height: 90,
        paddingHorizontal: 100
    },
    text: {
        fontSize: 24,
        fontFamily: "Rockwell",
        fontWeight: "700",
        paddingTop: 10,
        color: "#414244",
        // width: "60%",
        textAlign: "center"
    },

    image: {}
});
