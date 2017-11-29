import * as React from "react";
import {
    Linking,
    Platform,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { IMessageObject } from "../../../../interfaces/index";

interface IImageMessageViewProps {
    currentMessage?: IMessageObject;
    containerStyle?: any;
}

export const ImageMessageView = (props: IImageMessageViewProps) => {
    if (props.currentMessage && props.currentMessage.hasImage) {
        const imagePath = props.currentMessage.imagePath;

        return (
            <TouchableOpacity style={[styles.container, props.containerStyle]}>
                <Image
                    style={styles.image}
                    source={imagePath}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: { paddingTop: 10 },
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3
    }
});
