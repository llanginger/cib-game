export interface IUserReducer {
    userName: string;
    currentProfilePicture: string;
    currentProfilePictureUrl: number;
    profilePictures: string[],
    profileUrls: string[]
}

const initState: IUserReducer = {
    userName: "placeholder name",
    currentProfilePicture: "boy",
    currentProfilePictureUrl: 5,
    profilePictures: ["boy", "girl"],
    profileUrls: ["../../images/gameAvatar.png", "../../images/gameAvatar.png"]
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
        default:
            return state;
    }
};
