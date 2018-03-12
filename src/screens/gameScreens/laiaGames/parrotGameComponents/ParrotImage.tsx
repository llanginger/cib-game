//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//Interface
interface IParrotImageProps {
    color: boolean
}

// create a component
export const ParrotImage: React.StatelessComponent<IParrotImageProps> = (props: IParrotImageProps) => {

    const getUrl = () => {
        return props.color ? require("../../../../images/parrot_cropped.jpeg") : require("../../../../images/parrot_cropped_bw.jpeg")
    }

    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={getUrl()} resizeMode="contain" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        height: 200,
        width: "100%",
        backgroundColor: "white"
    },
    image: {
        height: "100%",
        width: "100%",
    }
});
