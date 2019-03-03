//import liraries
import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated,
    Easing
} from 'react-native';
import styles from "./styles"
import * as Animatable from "react-native-animatable";

//Interfaces
interface IWellDoneProps {
    navigation?: any
    onPress: any // temporary, get this from an action eventually, probably
}

interface IWellDoneState {
    animationStarted: boolean,
    popupOneAnimation: Animated.Value,
    popupTwoAnimation: Animated.Value,
    popupThreeAnimation: Animated.Value,
    popupThreeStarsAnimation: Animated.Value,
}

// create a component

const imgUrl = "../../../images/laia/icons/score-star.png"

export class WellDone extends React.Component<IWellDoneProps, IWellDoneState> {


    state = {
        animationStarted: false,
        popupOneAnimation: new Animated.Value(0),
        popupTwoAnimation: new Animated.Value(0),
        popupThreeAnimation: new Animated.Value(0),
        popupThreeStarsAnimation: new Animated.Value(0),
    }

    _animatePopupOneIn = () => {

        const { popupOneAnimation } = this.state
        this.setState({ animationStarted: true }, () => {

            popupOneAnimation.setValue(0)
            Animated.spring(
                popupOneAnimation,
                {
                    toValue: 1,
                    speed: 16,
                    useNativeDriver: true
                },
            ).start(() => this._animatePopupOneOut())

        })
    }

    _animatePopupOneOut = () => {

        const { popupOneAnimation } = this.state
        this.setState({ animationStarted: false }, () => {

            popupOneAnimation.setValue(1)
            Animated.timing(
                popupOneAnimation,
                {
                    toValue: 2,
                    delay: 500,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start()
        })
    }

    _animatePopupTwoIn = () => {

        const { popupTwoAnimation } = this.state
        this.setState({ animationStarted: true }, () => {
            popupTwoAnimation.setValue(0)
            Animated.spring(
                popupTwoAnimation,
                {
                    toValue: 1,
                    speed: 16,
                    useNativeDriver: true
                }
            ).start(() => this._animatePopupTwoOut())
        })
    }

    _animatePopupTwoOut = () => {
        const { popupTwoAnimation } = this.state
        this.setState({ animationStarted: false }, () => {

            popupTwoAnimation.setValue(1)
            Animated.timing(
                popupTwoAnimation,
                {
                    toValue: 2,
                    duration: 500,
                    delay: 500,
                    useNativeDriver: true
                }
            ).start(() => {
                popupTwoAnimation.setValue(0)
            })
        })
    }

    _animatePopupThreeIn = () => {

        const {
            popupThreeAnimation,
            popupThreeStarsAnimation
        } = this.state

        this.setState({ animationStarted: true }, () => {
            popupThreeAnimation.setValue(0)
            Animated.spring(
                popupThreeAnimation,
                {
                    toValue: 1,
                    speed: 16,
                    useNativeDriver: true
                }
            ).start(() => {
                popupThreeStarsAnimation.setValue(0)
                Animated.timing(
                    popupThreeStarsAnimation,
                    {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true
                    }
                ).start(() => {
                    popupThreeStarsAnimation.setValue(1)
                    Animated.timing(
                        popupThreeStarsAnimation,
                        {
                            toValue: 2,
                            duration: 500,
                            delay: 500,
                            useNativeDriver: true
                        }
                    ).start(() => this._animatePopupThreeOut())
                })
            })
        })
    }

    _animatePopupThreeOut = () => {
        const { popupThreeAnimation, popupThreeStarsAnimation } = this.state
        this.setState({ animationStarted: false }, () => {

            popupThreeAnimation.setValue(1)
            Animated.timing(
                popupThreeAnimation,
                {
                    toValue: 2,
                    duration: 500,
                    delay: 500,
                    useNativeDriver: true
                }
            ).start(() => {
                popupThreeAnimation.setValue(0)
                popupThreeStarsAnimation.setValue(0)
            })
        })
    }




    render() {

        const {
            popupOneAnimation,
            popupTwoAnimation,
            popupThreeAnimation,
            popupThreeStarsAnimation
        } = this.state

        const popupOneOpacity = popupOneAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0]
        })

        const popupOneScale = popupOneAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0.3, 1, 0.3]
        })

        const popupTwoScale = popupTwoAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0.5, 1, 0.5]
        })
        const popupTwoTranslateX = popupTwoAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-500, 0, 500]
        })
        const popupTwoTranslateY = popupTwoAnimation.interpolate({
            inputRange: [0, 0.3, 0.6, 1, 1.3, 1.6, 2],
            outputRange: [100, 55, 20, 0, 20, 55, 100]
        })

        const popupThreeContainerOpacity = popupThreeAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0]
        })

        const popupThreeStarOneScale = popupThreeStarsAnimation.interpolate({
            inputRange: [0, 0.3, 1, 1.3, 2],
            outputRange: [0, 1.4, 1, 0, 0]
        })
        const popupThreeStarTwoScale = popupThreeStarsAnimation.interpolate({
            inputRange: [0, 0.3, 0.6, 1, 1.3, 1.6, 2],
            outputRange: [0, 0, 1.6, 1.2, 1.2, 0, 0]
        })
        const popupThreeStarThreeScale = popupThreeStarsAnimation.interpolate({
            inputRange: [0, 0.6, 0.9, 1, 1.6, 2],
            outputRange: [0, 0, 1.4, 1, 1, 0]
        })

        const popupThreeTextOpacity = popupThreeStarsAnimation.interpolate({
            inputRange: [0, 0.8, 1, 1.6, 2],
            outputRange: [0, 0, 1, 1, 0]
        })


        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.contentContainerOne,
                        {
                            opacity: popupOneOpacity,
                            transform: [
                                { scale: popupOneScale }
                            ]
                        }
                    ]}
                >
                    <Image
                        style={styles.popupImage}
                        source={require(imgUrl)}
                        resizeMode="contain"
                    />
                    <Text style={styles.popupText}>Well Done!</Text>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.contentContainerTwo,
                        {
                            transform: [
                                { scale: popupTwoScale },
                                { translateX: popupTwoTranslateX },
                                { translateY: popupTwoTranslateY }
                            ]
                        }
                    ]}
                >
                    <Image
                        style={styles.popupImage}
                        source={require(imgUrl)}
                        resizeMode="contain"
                    />
                    <View
                        style={styles.popupTextTwoContainer}
                    >
                        <Text style={styles.popupText}>Well Done!</Text>
                    </View>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.contentContainerThree,
                        {
                            opacity: popupThreeContainerOpacity
                        }
                    ]}
                >
                    <View style={styles.popupThreeImageContainer}>
                        <Animated.Image
                            style={[
                                styles.popupThreeImage,
                                { transform: [{ scale: popupThreeStarOneScale }] }
                            ]}
                            source={require(imgUrl)}
                            resizeMode="contain"
                        />
                        <Animated.Image
                            style={[
                                styles.popupThreeImage,
                                {
                                    transform: [
                                        { translateY: -20 },
                                        { scale: popupThreeStarTwoScale }
                                    ]
                                }
                            ]}
                            source={require(imgUrl)}
                            resizeMode="contain"
                        />
                        <Animated.Image
                            style={[
                                styles.popupThreeImage,
                                { transform: [{ scale: popupThreeStarThreeScale }] }
                            ]}
                            source={require(imgUrl)}
                            resizeMode="contain"
                        />
                    </View>
                    <Animated.View
                        style={[
                            styles.popupTextTwoContainer,
                            { opacity: popupThreeTextOpacity }
                        ]}
                    >
                        <Text style={styles.popupText}>Well Done!</Text>
                    </Animated.View>
                </Animated.View>

                <View
                    style={styles._tempButtonContainer}
                >
                    <TouchableOpacity
                        style={styles._tempButton}
                        onPress={this._animatePopupOneIn}
                    >
                        <Text style={styles._tempButtonText}>Popup One</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles._tempButton, { backgroundColor: "purple" }]}
                        onPress={this._animatePopupTwoIn}
                    >
                        <Text style={styles._tempButtonText}>Popup Two</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles._tempButton, { backgroundColor: "#303F9F" }]}
                        onPress={this._animatePopupThreeIn}
                    >
                        <Text style={styles._tempButtonText}>Popup Three</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};
