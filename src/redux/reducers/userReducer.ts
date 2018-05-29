export interface IUserReducer {
    userName: string;
    currentProfilePicture: string;
    selectedCharacterIndex: number;
    currentProfilePictureUrl: number; // Defunct
    completedLevels: 0 | 1 | 2 | 3 | 4 | 5;
}

const initState: IUserReducer = {
    userName: "placeholder name",
    selectedCharacterIndex: 0,
    currentProfilePicture: "girlCurlyBrownHair",
    currentProfilePictureUrl: 5,
    completedLevels: 4
};

export const userReducer = (state: IUserReducer = initState, action) => {
    switch (action.type) {
        case "SET_LEVEL_TO":
            return {
                ...state,
                completedLevels: action.payload.nextLevel
            };
        case "SET_USERNAME":
            return {
                ...state,
                userName: action.payload.userName
            };
        case "SET_PROFILE_PICTURE":
            return {
                ...state,
                currentProfilePicture: action.payload.profilePicture,
                selectedCharacterIndex: action.payload.selectedCharacterIndex,
                currentProfilePictureUrl: action.payload.profilePictureUrl
            };
        case "CHOOSE_AVATAR":
            return {
                ...state,
                currentProfilePicture: action.payload.avatar
            };
        default:
            return state;
    }
};
