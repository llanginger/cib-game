export type IEmojiEmotion =
    | "calm"
    | "disgust"
    | "fear"
    | "happy"
    | "rage"
    | "sad";

interface IEmoji {
    emotion: IEmojiEmotion;
    image: number;
}

export const emojis: IEmoji[] = [
    {
        emotion: "happy",
        image: require("../../images/laia/emoji-game/emojis/alegria.png")
    },
    {
        emotion: "disgust",
        image: require("../../images/laia/emoji-game/emojis/asco.png")
    },
    {
        emotion: "calm",
        image: require("../../images/laia/emoji-game/emojis/calma.png")
    },
    {
        emotion: "rage",
        image: require("../../images/laia/emoji-game/emojis/ira.png")
    },
    {
        emotion: "fear",
        image: require("../../images/laia/emoji-game/emojis/miedo.png")
    },
    {
        emotion: "sad",
        image: require("../../images/laia/emoji-game/emojis/tristeza.png")
    }
];
