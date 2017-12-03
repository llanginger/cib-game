import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    // ImageBackground,
    TouchableHighlight,
    ViewProperties,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar,
    Animated,
    Easing,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../../../redux/store";
import { ImageBackground } from "./ImageCardBackground"
import DeviceInfo from 'react-native-device-info'




interface IImageCardProps {
    disabled?: boolean;
    selected: boolean;
    id: any;
    correctAnswer: boolean;
    image: any;
    onPress: any;
    containerProps?: any;
    imageProps?: any;
    resizeMode?: string
    hideRadio?: boolean;
    showAnswer?: boolean;
    gameType: "card" | "word"
}

interface IImageCardState {
    deviceType: string
}

const circleDiameter: number = 25

export class ImageCard extends Component<IImageCardProps, IImageCardState> {

    private springValue: Animated.Value

    constructor(props) {
        super(props)
        this.state = {
            deviceType: DeviceInfo.getModel()
        }
        this.springValue = new Animated.Value(0)
        this._bounce = this._bounce.bind(this)
        this._renderRadio = this._renderRadio.bind(this)
        this._makeBorder = this._makeBorder.bind(this)
        this._getShadowOpacity = this._getShadowOpacity.bind(this)
    }

    componentDidMount() {
        console.log("Image card state: ", this.state)
    }

    _bounce() {
        console.log("Device: ", DeviceInfo.getModel())
        if (this.props.selected) {
            return
        }
        this.springValue.setValue(0)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 5,
                velocity: 20
            }
        ).start()
        this.props.onPress()
    }

    _makeBorder() {
        if (this.props.showAnswer) {
            return {
                borderColor: this.props.correctAnswer && this.props.selected ? "#4CAF50" : "palevioletred",
                borderWidth: this.props.selected ? 5 : 0,
            }
        } else return {}
    }

    _getShadowOpacity() {
        if (this.props.showAnswer && this.props.selected) {
            return 0
        } else {
            return 0.5
        }
    }

    _renderRadio() {
        if (this.props.hideRadio) {
            return null
        }

        return (
            <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                    <View style={[styles.radioInner, { backgroundColor: this.props.selected ? "blue" : "white" }]}>
                    </View>
                </View>
            </View>
        )
    }


    render() {

        const { disabled = false } = this.props
        const bounceScale = this.springValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.99, 1]
        })

        // Extracted merged styles
        const imageStyles = [styles.image, {
            shadowOpacity: this._getShadowOpacity(),
            ...this.props.imageProps
        }]

        const iPhoneStyles = () => {
            return [
                styles.card, {
                    ...this.props.containerProps,
                    ...this._makeBorder(),
                    transform: [{ scale: bounceScale }],
                }
            ]
        }

        const iPadStyles = () => {
            if (this.props.gameType === "word") {
                return [
                    styles.iPadWordCard, {
                        ...this.props.containerProps,
                        ...this._makeBorder(),
                        transform: [{ scale: bounceScale }],
                    }
                ]
            } else {
                return [
                    styles.iPadCardCard, {
                        ...this.props.containerProps,
                        ...this._makeBorder(),
                        transform: [{ scale: bounceScale }],
                    }
                ]
            }
        }

        const cardStyles = () => {
            if (this.state.deviceType === "iPad") {
                return iPadStyles()
            } else {
                return iPhoneStyles()
            }
        }

        return (
            <TouchableWithoutFeedback
                onPress={this._bounce}
                disabled={disabled}
            >
                <Animated.View
                    style={cardStyles()}
                >
                    <ImageBackground
                        resizeMode={this.props.resizeMode || "cover"}
                        borderRadius={15}
                        source={this.props.image}
                        style={imageStyles}
                    >
                        {this._renderRadio()}
                    </ImageBackground>
                </Animated.View>
            </TouchableWithoutFeedback >
        )
    }
}


const styles = StyleSheet.create({
    card: {
        width: "40%",
        borderWidth: 0,
        marginHorizontal: "2.5%",
        height: 200,
        borderColor: "white",
        borderRadius: 15,
    },
    iPadWordCard: {
        width: "40%",
        borderWidth: 0,
        marginHorizontal: "2.5%",
        height: 400,
        borderColor: "white",
        borderRadius: 15,
    },
    iPadCardCard: {
        width: "40%",
        borderWidth: 0,
        marginHorizontal: "2.5%",
        height: 350,
        borderColor: "white",
        borderRadius: 15,
    },
    radioContainer: {

    },
    image: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }

    },
    radioOuter: {
        margin: 10,
        height: circleDiameter,
        width: circleDiameter,
        borderRadius: circleDiameter / 2,
        backgroundColor: "#3F51B5",
        justifyContent: "center",
        alignItems: "center"
    },
    radioInner: {
        height: circleDiameter - 5,
        width: circleDiameter - 5,
        borderRadius: (circleDiameter - 5) / 2,
        borderWidth: 2,
        borderColor: "white"
    }
})