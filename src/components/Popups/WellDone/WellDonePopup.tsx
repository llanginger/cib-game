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
    animationStarted: boolean
}

// create a component

const imgUrl = "../../../images/laia/icons/score-star.png"

export class WellDone extends React.Component<IWellDoneProps, IWellDoneState> {

    private animatableViewOne: any
    private animatableViewTwo: any


    state = {
        animationStarted: false,
        popupOneAnimation: new Animated.Value(0),
        popupTwoAnimation: new Animated.Value(0),
    }


    _shouldAnimateOut = (animation: "one" | "two") => {
        console.log("Should animate out called with: ", animation)
        const { animationStarted } = this.state
        if (animationStarted) {
            if (animation === "one") {
                return this._animatePopupOneOut()
            } else if (animation === "two") {
                return this._animatePopupTwoOut()
            } else {
                return this._animatePopupOneOut()
            }
        }
        return
    }

    _animatePopupOneIn = () => {
        this.setState({ animationStarted: true }, () => {

            this.animatableViewOne.transitionTo({
                opacity: 1,
                transform: [{ scale: 1 }]
            })
        })
        // this.animatableView.bounceIn(1000)
    }

    _animatePopupOneOut = () => {
        this.setState({ animationStarted: false }, () => {

            this.animatableViewOne.transitionTo({
                opacity: 0,
                transform: [{ scale: 0.5 }]
            })
        })
    }

    _animatePopupTwoIn = () => {
        this.setState({ animationStarted: true }, () => {

            this.animatableViewTwo.transitionTo({
                transform: [
                    { translateX: 0 },
                    { translateY: 0 },
                    { scale: 1 }
                ]
            })
        })
        // this.animatableView.bounceIn(1000)
    }

    _animatePopupTwoOut = () => {
        this.setState({ animationStarted: false }, () => {

            this.animatableViewTwo.transitionTo({
                transform: [
                    { translateX: 300 },
                    { translateY: 100 },
                    { scale: 0.5 },
                ]
            })
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <Animatable.View
                    onTransitionEnd={() => this._shouldAnimateOut("one")}
                    ref={view => this.animatableViewOne = view}
                    style={styles.contentContainerOne}
                >
                    <Image
                        style={styles.popupImage}
                        source={require(imgUrl)}
                        resizeMode="contain"
                    />
                    <Text style={styles.popupText}>Well Done!</Text>
                </Animatable.View>
                <Animatable.View
                    onTransitionEnd={() => this._shouldAnimateOut("two")}
                    ref={view => this.animatableViewTwo = view}
                    style={styles.contentContainerTwo}
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
                </Animatable.View>
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
                </View>
            </View>
        );
    }
};
