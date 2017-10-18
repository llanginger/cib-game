import shortid from "shortid";
import { giftedUserObject } from "./giftedUserObject";
export const createGiftedUserMessage = (text: string) => {
    return {
        _id: shortid.generate(),
        text,
        createdAt: new Date(),
        user: giftedUserObject
    };
};
