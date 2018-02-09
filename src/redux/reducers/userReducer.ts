export interface IUserReducer {
    userName: string;
    currentProfilePicture: string;
    currentProfilePictureUrl: number; // Defunct
}

const initState: IUserReducer = {
    userName: "placeholder name",
    currentProfilePicture: "girlCurlyBrownHair",
    currentProfilePictureUrl: 5,

};

export const userReducer = (state: IUserReducer = initState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                userName: action.payload.userName
            };
        case "SET_PROFILE_PICTURE":
            return {
                ...state,
                currentProfilePicture: action.payload.profilePicture,
                currentProfilePictureUrl: action.payload.profilePictureUrl,
            }
        case "CHOOSE_AVATAR":
            return {
                ...state,
                currentProfilePicture: action.payload.avatar
            }
        default:
            return state;
    }
};
