export interface IUserReducer {
    userName: string;
    userProfilePicture: string;
}

const initState: IUserReducer = {
    userName: "placeholder name",
    userProfilePicture: "123"
};

export const userReducer = (state: IUserReducer = initState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                userName: action.payload.userName
            };
        default:
            return state;
    }
};
