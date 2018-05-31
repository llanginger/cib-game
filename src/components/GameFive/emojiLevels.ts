export interface IEmojiLevel {
    imageFrame1: number;
    imageFrame2: number;
    title: string;
    fadeIn?: boolean;
}

export const emojiLevels: IEmojiLevel[] = [
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/ball-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/ball-frame2.png"),
        title: "My team lost..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/fantasma-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/fantasma-frame2.png"),
        title: "Ghost stories...",
        fadeIn: true
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/broccoli-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/broccoli-frame2.png"),
        title: "Veggies for lunch..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/castle-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/castle-frame2.png"),
        title: "We're going to the beach..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/clock-frame2.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/clock-frame2.png"),
        title: "Time for school..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/console-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/console-frame2.png"),
        title: "Time to play..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/guitar-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/guitar-frame2.png"),
        title: "Concert today..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/manzana-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/manzana-frame2.png"),
        title: "Look what I found..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/mop-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/mop-frame2.png"),
        title: "Clean up time..."
    },
    {
        imageFrame1: require("../../images/laia/emoji-game/animation-frames/paint-frame1.png"),
        imageFrame2: require("../../images/laia/emoji-game/animation-frames/paint-frame2.png"),
        title: "Time to get creative..."
    }
];
