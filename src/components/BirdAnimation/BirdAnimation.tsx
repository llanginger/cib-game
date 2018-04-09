//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    Image,
    TouchableOpacity
} from "react-native";

const birdOne = require("../../images/laia/animations/pigeon1.png");
const birdTwo = require("../../images/laia/animations/pigeon2.png");

//Interfaces
interface IBirdAnimationProps {}

interface IBirdAnimationState {
    birdOne: boolean;
    numberOfFlaps: number;
    currentFlap: number;
}

// create a component

export class BirdAnimation extends React.Component<
    IBirdAnimationProps,
    IBirdAnimationState
> {
    private birdMovement: Animated.Value;

    constructor(props) {
        super(props);

        this.birdMovement = new Animated.Value(0);

        this.state = { birdOne: true, numberOfFlaps: 6, currentFlap: 0 };

        this.chooseBird = this.chooseBird.bind(this);
        this.animateBird = this.animateBird.bind(this);
    }

    componentDidMount() {}

    animateBird() {
        this.birdMovement.setValue(0);
        Animated.timing(this.birdMovement, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear
        }).start(() => {
            if (this.state.currentFlap < this.state.numberOfFlaps) {
                this.setState(
                    {
                        birdOne: !this.state.birdOne,
                        currentFlap: this.state.currentFlap + 1
                    },
                    this.animateBird
                );
            } else {
                this.setState({
                    currentFlap: 0
                });
            }
        });
    }

    chooseBird() {
        console.log("Choose bird called");
        if (this.state.birdOne) {
            return (
                <Image
                    source={birdOne}
                    resizeMode="contain"
                    style={styles.image}
                />
            );
        } else {
            return (
                <Image
                    source={birdTwo}
                    resizeMode="contain"
                    style={styles.image}
                />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.chooseBird()}
                <TouchableOpacity onPress={this.animateBird}>
                    <Text>Flap</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100
    }
});
