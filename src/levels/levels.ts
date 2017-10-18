import { IMessageObject, IButtonObject } from "../interfaces/index";

export interface IGameLevelObject {
    question: IMessageObject[];
    userOptions: [IButtonObject, IButtonObject];
    response: {
        cool: IMessageObject[];
        hot: IMessageObject[];
    };
}

export const levels: IGameLevelObject[] = [
    {
        question: [
            {
                text: "I don't like Frank"
            },
            {
                text: "Should I hit him?"
            }
        ],
        userOptions: [
            {
                text: "Hit him!",
                onClick: "Ready!" // If this is the format we can get rid of this
            },
            {
                text: "Don't hit him!",
                onClick: "cool" // If this is the format we can get rid of this
            }
        ],
        response: {
            cool: [
                {
                    text: "You're right, we can work this out peacefully!"
                },
                {
                    hasImage: true,
                    imagePath: require("../images/batmanCool.png")
                }
            ],
            hot: [
                {
                    text:
                        "I hit him but now he is sad and I don't feel good either"
                },
                {
                    hasImage: true,
                    imagePath: require("../images/batmanHot.png")
                }
            ]
        }
    }
];
