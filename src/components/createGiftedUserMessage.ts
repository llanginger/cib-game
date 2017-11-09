import shortid from "shortid";


export const createGiftedUserMessage = (text: string, userObject) => {
    return {
        _id: shortid.generate(),
        text,
        createdAt: new Date(),
        user: userObject
    };
};
