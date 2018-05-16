//import liraries
import * as React from "react";
import {
    View,
    Text,
    TextStyle,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ViewStyle,
    ImageStyle
} from "react-native";

import { appStyles } from "../../styles/styles";

//Interfaces
interface ITwoFrameTouchableProps {
    onPress: any;
    sources: [number, number];
    containerStyle: ImageStyle;
    text: string;
    textStyle: TextStyle;
}

interface ITwoFrameTouchableState {
    pressIn: boolean;
}

export class TwoFrameTouchable extends React.Component<
    ITwoFrameTouchableProps,
    ITwoFrameTouchableState
> {
    constructor(props) {
        super(props);

        this.state = { pressIn: false };
    }

    _onPressIn = () => {
        this.setState({ pressIn: true });
    };

    _onPressOut = () => {
        this.setState({ pressIn: false }, () =>
            setTimeout(this.props.onPress, 300)
        );
    };

    _getImage = () => {
        const { sources, containerStyle } = this.props;
        const { height, width } = containerStyle;
        return this.state.pressIn ? (
            <Image
                source={sources[1]}
                style={[styles.image]}
                resizeMode="contain"
            />
        ) : (
            <Image
                source={sources[0]}
                style={[styles.image]}
                resizeMode="contain"
            />
        );
    };
    render() {
        const {
            sources,
            onPress,
            containerStyle,
            text,
            textStyle
        } = this.props;
        return (
            <View
                pointerEvents="box-none"
                style={[styles.container, containerStyle]}
            >
                <TouchableWithoutFeedback
                    style={{
                        height: containerStyle.height,
                        width: containerStyle.width
                    }}
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                >
                    {this._getImage()}
                </TouchableWithoutFeedback>
                <Text
                    style={[
                        styles.text,
                        {
                            ...textStyle,
                            lineHeight: textStyle.fontSize
                                ? textStyle.fontSize + 5
                                : 25
                        }
                    ]}
                >
                    {text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
        // borderColor: "red",
        // borderWidth: 1
    },
    image: {
        height: "100%",
        width: "100%"
    },
    text: {
        position: "absolute",
        color: "#4e4f4d",
        fontFamily: appStyles.rockwellFont,
        fontSize: 16
    }
});
