export interface IUserPreferencesReducer {
    fontSize: number
}

const initState: IUserPreferencesReducer = {
    fontSize: 14
}

export const userPreferencesReducer = (state: IUserPreferencesReducer = initState, action) => {
    switch (action.type) {
        case "USER_PREFERENCE_FONTSIZE":
            return {
                ...state,
                fontSize: action.payload.fontSize
            }
        default: return state
    }
}