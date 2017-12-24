import * as React from "react"
import { Animated, Easing } from "react-native"

interface IPulsingTextProps {
    text: string
    animate: boolean;
    textStyles: {}
}

interface IPulsingTextState {
    animate: boolean
}

export class PulsingText extends React.Component<IPulsingTextProps, IPulsingTextState> {

    private pulseValue: Animated.Value

    constructor(props) {
        super(props)

        this.state = {
            animate: false
        }
        this.pulseValue = new Animated.Value(0)
        this._pulse = this._pulse.bind(this)
    }


    componentWillReceiveProps(nextProps: IPulsingTextProps, oldProps) {
        if (nextProps.animate && !this.state.animate) {
            this.setState({ animate: true }, () => this._pulse())
        }
    }

    _pulse() {
        this.pulseValue.setValue(0)
        Animated.timing(
            this.pulseValue,
            {
                toValue: 1,
                delay: 2500,
                duration: 2000,
                easing: Easing.bounce
            }
        ).start(() => this._pulse())
    }

    render() {

        const pulseScale = this.pulseValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.2, 1]
        })

        return (
            <Animated.Text style={[this.props.textStyles, { transform: [{ scale: pulseScale }] }]}>
                {this.props.text}
            </Animated.Text>
        )
    }
}