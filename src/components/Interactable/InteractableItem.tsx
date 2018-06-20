//import liraries
import * as React from "react";
import {
    View,
    ViewStyle,
    Text,
    StyleSheet,
    Image,
    ImageStyle,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";
import { IRobotEmotion } from "../Robot/robotImages";
import * as Animatable from "react-native-animatable";

//Interfaces
interface IInteractableItemProps {
    snapPoints: any[];
    reset: boolean;
    onDrag: any;
    onPress: any;
    onSnap: any;
    onReset?: any;
    image: number;
    viewStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    animate?: boolean;
}

interface IInteractableItemState {
    snapPoints: any[];
    reset: boolean;
    animateOut: boolean;
}

export interface ISnapPoint {
    x: number;
    y: number;
    damping?: number;
    tension?: number;
    id?: string;
}

// create a component

export class InteractableItem extends React.Component<
    IInteractableItemProps,
    IInteractableItemState
> {
    private faceRef;

    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            reset: false,
            animateOut: false
        };

        this._reset = this._reset.bind(this);
        this._onSnap = this._onSnap.bind(this);
    }

    componentDidMount() {
        this.setState({ snapPoints: this.props.snapPoints });
    }

    componentWillReceiveProps(nextProps: IInteractableItemProps) {
        if (nextProps.reset && !this.state.reset) {
            this.setState({ reset: true }, () => this._reset());
        }
    }

    _reset() {
        const { onReset = () => console.log("No reset prop") } = this.props;
        setTimeout(() => {
            this.faceRef.snapTo(this.state.snapPoints[0]);
            this.setState({ reset: false }, onReset);
        }, 0);
        setTimeout(() => {
            this.setState({ animateOut: false });
        }, 0);
    }

    _onSnap(e) {
        console.log("E: ", e.nativeEvent);
        if (this.props.animate && e.nativeEvent.index === 1) {
            this.setState({ animateOut: true });
        }
    }

    render() {
        const {
            onDrag,
            snapPoints,
            image,
            onPress,
            onSnap,
            viewStyle = {},
            imageStyle = {}
        } = this.props;

        const viewStyles: ViewStyle = {
            flexBasis: "30%",
            padding: 0,
            marginVertical: 10,
            ...viewStyle
        };
        return (
            <Interactable.View
                ref={el => (this.faceRef = el)}
                style={viewStyles}
                snapPoints={snapPoints}
                onSnap={this._onSnap}
                onDrag={onDrag}
            >
                <Animatable.View
                    animation={this.state.animateOut ? "fadeOut" : "fadeIn"}
                    delay={300}
                >
                    <TouchableOpacity onPress={this._reset}>
                        <Image
                            style={[styles.image, imageStyle]}
                            source={image}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </Animatable.View>
            </Interactable.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    faceContainer: {
        flexBasis: "30%",
        padding: 0,
        marginVertical: 10
    },
    image: {
        height: 50,
        alignSelf: "center"
    }
});
