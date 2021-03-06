//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageStyle,
    ViewStyle
} from "react-native";
import * as Animatable from "react-native-animatable";

//Interface
interface IGameImageProps {
    source: number;
    reset: boolean;
    circlePortrait?: boolean;
    imageStyle?: ImageStyle;
    viewStyle?: ViewStyle;
}

// create a component
export const GameImage: React.StatelessComponent<IGameImageProps> = (
    props: IGameImageProps
) => {
    const { imageStyle = {} } = props;
    return (
        <Animatable.View
            animation={props.reset ? "fadeOut" : "fadeIn"}
            duration={1000}
            style={[
                styles.imageContainer,
                {
                    paddingVertical: props.circlePortrait ? 10 : 0,
                    ...props.viewStyle
                }
            ]}
        >
            <Image
                style={[styles.image, imageStyle]}
                source={props.source}
                resizeMode="contain"
            />
        </Animatable.View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        height: 375,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
        // paddingVertical: 10
    },
    image: {
        // flex: 1,
        height: "80%",
        width: "80%",
        alignSelf: "center"
    }
});
