import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { makeUserAvatars } from "../characterSelect/components/makeUserAvatars"
import { SkillCard } from "./components/SkillCard"


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height



const skills: {
    headerText: string;
    bodyText: string;
    color: string;
    id: any
}[] = [
        {
            headerText: "RECONOCER MIS EMOCIONES",
            bodyText: "Reconocer mis emociones es el primer paso para poder regularlas.",
            color: "#cc0066",
            id: 1
        },
        {
            headerText: "GESTIONAR MIS EMOCIONES",
            bodyText: "Saber cómo regular mis emociones me ayuda a sentirme bien, estudiar mejor y conseguir mis metas.",
            color: "#3333cc",
            id: 2
        },
        {
            headerText: "TENER ALTA AUTOESTIMA",
            bodyText: "Al contrario de lo que pensamos, es más importante lo que pienso de mí de lo que piensan los demás.",
            color: "#ffcc33",
            id: 3
        },
        {
            headerText: "ESCUCHAR CON EMPATíA",
            bodyText: "Saber escuchar y ser empático es imprescindible para tener buenas relaciones.",
            color: "#339900",
            id: 4
        },
        {
            headerText: "COMUNICAR CON ASERTIVIDAD",
            bodyText: "Cuando comunico con asertividad tengo en cuenta mis derechos y deseos y también los de los demás.",
            color: "#ff9933",
            id: 5
        },
        {
            headerText: "VIVIR CONSCIENTEMENTE",
            bodyText: "Vivir conscientemente hace posible ver las cosas como son en vez de verlas a través de un filtro de prejuicios.",
            color: "#663366",
            id: 6
        }
    ]



const SkillRecapList = (props: { navigator: any }) => {
    return (
        <FlatList
            data={skills}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => {
                return (
                    <SkillCard
                        headerText={item.headerText}
                        bodyText={item.bodyText}
                        color={item.color}
                        navigator={props.navigator}
                        skillNumber={item.id}
                    />
                )
            }}
        />
    )
}


export class SkillRecap extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                console.log("Dismiss modal")
                this.props.navigator.dismissModal();
            }
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <SkillRecapList navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#daf6fa",
    }
})