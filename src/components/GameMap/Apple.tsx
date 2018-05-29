//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ImageStyle
} from "react-native";

//Interface
interface IAppleProps {
    imageStyle: ImageStyle;
    onPress: any;
}

const apple = require("../../images/laia/game-map/apple.png");

// create a component
export const Apple: React.StatelessComponent<IAppleProps> = (
    props: IAppleProps
) => {
    return (
        <TouchableOpacity onPressOut={props.onPress}>
            <Image
                source={apple}
                resizeMode="contain"
                style={[styles.baseApple, props.imageStyle]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    baseApple: {
        position: "absolute",
        height: 80,
        width: 80
    }
});
