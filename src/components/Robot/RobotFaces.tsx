//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces } from "./robotImages";
import { robotGameChooseFace } from "../../redux/actions/index";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";
import { InteractableRobotFace } from "./InteractableRobotFace";
//Interface

interface snapPoint {
    x: number;
    y: number;
    damping?: number;
    tension?: number;
    id?: string;
}
interface IRobotFacesProps {
    chooseFace: any;
}

interface IRobotFacesState {
    snapPoints: snapPoint[];
}

// create a component
class _RobotFaces extends React.Component<IRobotFacesProps, IRobotFacesState> {
    private interactableFaces: any[];

    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }]
        };
        this._makeFaceButtons = this._makeFaceButtons.bind(this);
        this._onLayout = this._onLayout.bind(this);
        this._onDrag = this._onDrag.bind(this);
        this._getCustomCoordinates = this._getCustomCoordinates.bind(this);
    }

    // _generateSnapPoint(e) {

    // }

    // TODO: Do math to figure out the offset needed so that each head can use "head" as a snapPoint
    _onLayout(e) {
        // const newSnapPoint = {
        //     x: e.nativeEvent.layout.x,
        //     y: e.nativeEvent.layout.y
        // };
        // console.log("Type of x: ", typeof e.nativeEvent.layout.x);
        // this.setState(
        //     { snapPoints: [...this.state.snapPoints, newSnapPoint] },
        //     () => console.log("Robot face snapPoints: ", this.state)
        // );

        console.log("Head location: ", e.nativeEvent.layout);
    }

    _onDrag(e) {
        console.log("Dragging: ", e.nativeEvent);
    }

    _getCustomCoordinates(i: number) {
        if (i < 3) {
            if (i === 0) {
                return { x: 136.5, y: -361.5, id: `Snap point ${i}` };
            } else if (i === 1) {
                return { x: 10, y: -361.5, id: `Snap point ${i}` };
            } else {
                return { x: -121.5, y: -361.5, id: `Snap point ${i}` };
            }
        } else {
            if (i === 3) {
                return { x: 136.5, y: -433.5, id: `Snap point ${i}` };
            } else if (i === 4) {
                return { x: 10, y: -433.5, id: `Snap point ${i}` };
            } else {
                return { x: -121.5, y: -433.5, id: `Snap point ${i}` };
            }
        }
    }

    _makeFaceButtons() {
        return robotFaces.map((face, i) => {
            return (
                <InteractableRobotFace
                    key={i}
                    onLayout={this._onLayout}
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i)
                    ]}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Pressed a face")}
                    emotion={face.emotion}
                    image={face.source}
                />

                // <Interactable.View
                //     key={i}

                //     style={styles.faceContainer}
                //     onLayout={this._onLayout}
                //     snapPoints={[
                //         ...this.state.snapPoints,
                //         this._getCustomCoordinates(i)
                //     ]}
                //     onDrag={this._onDrag}
                // >
                //     <TouchableOpacity
                //         onPress={() =>
                //             this.props.chooseFace({
                //                 emotion: face.emotion
                //             })
                //         }
                //     >
                //         <Image
                //             style={styles.faceImage}
                //             source={face.source}
                //             resizeMode="contain"
                //         />
                //     </TouchableOpacity>
                // </Interactable.View>
            );
        });
    }

    render() {
        console.log("State before makefancybuttons: ", this.state);
        return <View style={styles.container}>{this._makeFaceButtons()}</View>;
    }
}

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
