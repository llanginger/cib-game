import { IPayloadAction } from "../../interfaces/IPayloadAction";

export interface ISetProfilePicturePayload {
    profilePicture: string;
    profilePictureUrl: number;
    selectedCharacterIndex: number;
}

export const setProfilePicture: (
    payload: ISetProfilePicturePayload
) => IPayloadAction<ISetProfilePicturePayload> = (
    payload: ISetProfilePicturePayload
) => {
    return {
        type: "SET_PROFILE_PICTURE",
        payload
    };
};
