import { StyleSheet } from 'react-native'
import { appStyles } from "../../styles/styles"

const CONTAINER_DIMS = 200
export default StyleSheet.create({
    container: {
        position: "absolute",
        top: 100,
        right: 0,
        left: 0,
    },
    contentContainer: {
        // opacity: 0,
        // transform: [
        //     { scale: 0.5 }
        // ],
        height: CONTAINER_DIMS,
        width: CONTAINER_DIMS,
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        borderRadius: CONTAINER_DIMS / 2,
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    popupText: {
        fontSize: 26,
        fontFamily: appStyles.rockwellFont
    },
    popupImage: {
        height: CONTAINER_DIMS / 2,
        width: CONTAINER_DIMS / 2,
        marginBottom: 20
    },
    _tempButtonContainer: {
        position: "absolute",
        right: 0,
        bottom: -100,
    },
    _tempButton: {
        padding: 5,
        marginVertical: 5,
        backgroundColor: "orangered",
    },
    _tempButtonText: {
        color: "white",
        fontSize: 16
    }
})