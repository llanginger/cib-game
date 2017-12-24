export interface IColorsReducer {
    HOT: string;
    COOL: string
}

const initState: IColorsReducer = {
    HOT: "#F44336",
    COOL: "#3F51B5"
}

export const colorsReducer = (state: IColorsReducer = initState, action) => {
    switch (action.type) {
        case "SET_COLOR":
            return {
                ...state,
                ...action.payload.colors
            }
        default: return state
    }
}