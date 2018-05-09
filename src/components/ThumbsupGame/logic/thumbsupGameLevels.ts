export interface IThumbsupGameLevel {
    titleText: string;
    emotion: string;
    bubbleText: string;
    thumbsup: boolean;
}

export const thumbsupGameLevels: IThumbsupGameLevel[] = [
    {
        titleText: "When I feel...",
        emotion: "Sad",
        bubbleText: "I can talk to a friend about my feelings",
        thumbsup: true
    },
    {
        titleText: "When I feel...",
        emotion: "Happy",
        bubbleText: "I have energy to help my friends when they need it",
        thumbsup: true
    },
    {
        titleText: "When I feel...",
        emotion: "Scared",
        bubbleText: "I freeze up and feel stuck",
        thumbsup: false
    },
    {
        titleText: "When I feel...",
        emotion: "Angry",
        bubbleText: "I hit whatever is closest to me",
        thumbsup: true
    }
];
