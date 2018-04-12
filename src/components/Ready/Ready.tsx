//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { screenObjects } from "../../navigation/screenObjects";
import { SandwichBoard } from "../SandwichBoard/SandwichBoard";
import { gameOneSubmitAnswer } from "../../redux/actions/index";
import { appStyles } from "../../styles/styles";
import { IReducers } from "../../redux/store";

//Interface
interface IReadyProps {
    dispatch?: any;
    sandwichText: string;
    readyScreenReset?: boolean;
}

interface IReadyState {
    buttonReset: boolean;
    show: boolean;
}

// create a component
class _Ready extends React.Component<IReadyProps, IReadyState> {
    private opacityValue: Animated.Value;

    constructor(props) {
        super(props);

        this.opacityValue = new Animated.Value(0);

        this.state = { buttonReset: false, show: true };
        this._buttonOnPress = this._buttonOnPress.bind(this);
        this._fadeOut = this._fadeOut.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({ type: "SHOW_SANDWICHBOARD" });
    }

    componentWillReceiveProps(nextProps: IReadyProps) {
        console.log("");
        if (nextProps.readyScreenReset && !this.state.show) {
            console.log("Should be showing ready screen");
            this.setState({ show: true, buttonReset: false }, () =>
                this.opacityValue.setValue(0)
            );
        }
    }

    _fadeOut() {
        this.opacityValue.setValue(0);
        Animated.timing(this.opacityValue, {
            toValue: 1,
            duration: 1000,
            delay: 1500,
            easing: Easing.linear
        }).start(() => this.setState({ show: false }));
    }

    _buttonOnPress() {
        this.props.dispatch({ type: "HIDE_SANDWICHBOARD" });
        setTimeout(() => this.setState({ buttonReset: true }), 300);
        this._fadeOut();
    }

    render() {
        const opacityStyleValue = this.opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });
        const ReadyButton = () => (
            <AnimatedButton
                text="Ready!"
                correct={false}
                reset={this.state.buttonReset}
                revealed={false}
                animationInType="fadeInUp"
                animationOutType="fadeOutLeft"
                delay={0}
                onPress={this._buttonOnPress}
            />
        );
        return this.state.show ? (
            <Animated.View
                style={[styles.container, { opacity: opacityStyleValue }]}
            >
                <SandwichBoard text={this.props.sandwichText} />
                <ReadyButton />
            </Animated.View>
        ) : null;
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        sandwichText: state.gameLevelTypeReducer.gameTitle,
        readyScreenReset: state.readyScreenReducer.resetReadyScreen
    };
};

export const Ready = connect(mapStateToProps)(_Ready);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 100,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30,
        backgroundColor: appStyles.colors.lightBackground,
        opacity: 1
    }
});
