import { IMessageObject, IButtonObject } from "../interfaces/index";

export interface IGameLevelObject {
    question: IMessageObject[];
    userOptions: IButtonObject[];
    response: {
        cool: IMessageObject[];
        hot?: IMessageObject[];
    };
}

export const gameInit: IGameLevelObject = {
    question: [
        {
            text: "Hello -insert name-"
        },
        {
            text: "Let me know when you're ready to start the game!"
        }
    ],
    userOptions: [
        {
            text: "Ready!",
            onClick: "Ready!"
        }
    ],
    response: {
        cool: [
            {
                text: "Great, let's begin!"
            }
        ]
    }
};

export const nextLevel: IGameLevelObject = {
    question: [],
    userOptions: [
        {
            text: "Ready!",
            onClick: "Ready!"
        }
    ],
    response: {
        cool: [
            {
                text: "Great, let's begin!"
            }
        ]
    }
};
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
                text: "Don't hit him!",
                onClick: "cool" // If this is the format we can get rid of this
            },
            {
                text: "Hit him!",
                onClick: "hot" // If this is the format we can get rid of this
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
                },
                {
                    text: "Great job!"
                },
                {
                    text: "Ready for another?"
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
                },
                {
                    text: "I bet you'll get it next time!"
                },
                {
                    text: "Ready for another?"
                }
            ]
        }
    },
    {
        question: [
            {
                text: "Lisa lost her balloon!"
            },
            {
                text: "Should I comfort her or let her deal with it on her own?"
            }
        ],
        userOptions: [
            {
                text: "Comfort her!",
                onClick: "cool" // If this is the format we can get rid of this
            },
            {
                text: "Leave her alone",
                onClick: "hot" // If this is the format we can get rid of this
            }
        ],
        response: {
            cool: [
                {
                    text:
                    "I told her everything would be ok and she seems to feel better"
                },
                {
                    hasImage: true,
                    imagePath: require("../images/balloonCool.png")
                },
                {
                    text: "It feels good to be nice to people!"
                },
                {
                    text: "Great job!"
                },
                {
                    text: "Ready for another?"
                }
            ],
            hot: [
                {
                    text: "I just watched her get angry at losing her balloon"
                },
                {
                    hasImage: true,
                    imagePath: require("../images/balloonHot.png")
                },
                {
                    text: "I bet I would have felt better if I had helped!"
                },
                {
                    text: "I bet you'll get it next time!"
                },
                {
                    text: "Ready for another?"
                }
            ]
        }
    }
];


// My friend won't play with me and I'm feeling angry
// What should I do to not be angry?
// A: Change the way he is thinking
// B: Demand friend plays with him

// Thinking cool is about truth and facts.
// Hot thoughts are about prejudices and opinions