//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces } from "./robotImages";
import { robotGameChooseFace } from "../../../../../../redux/actions/index";
import { connect } from "react-redux";
//Interface
interface IRobotFacesProps {
    chooseFace: any;
}

// create a component
const _RobotFaces: React.StatelessComponent<IRobotFacesProps> = (
    props: IRobotFacesProps
) => {
    const makeFaceButtons = () => {
        return robotFaces.map((face, i) => {
            return (
                <TouchableOpacity
                    onPress={() =>
                        props.chooseFace({
                            emotion: face.emotion
                        })
                    }
                    key={i}
                    style={styles.faceContainer}
                >
                    <Image
                        style={styles.faceImage}
                        source={face.source}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            );
        });
    };
    return <View style={styles.container}>{makeFaceButtons()}</View>;
};

const mapDispatchToProps = {
    chooseFace: robotGameChooseFace
};

const mapStateToProps = () => {
    return {};
};

export const RobotFaces = connect(mapStateToProps, mapDispatchToProps)(
    _RobotFaces
);
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    faceContainer: {
        flexBasis: "30%",
        padding: 0,
        marginVertical: 10
    },
    faceImage: {
        height: 50,
        alignSelf: "center"
    }
});
