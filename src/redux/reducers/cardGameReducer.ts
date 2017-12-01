export interface ICardGameCard {
    image?: any;
    correctAnswer: boolean;
    selected: boolean;
    id: number
}

export interface ICardGameLevel {
    headerText: string;
    id: number;
    cards: ICardGameCard[]
}
export interface ICardGameReducer {
    seenLevels: number[]
    level: ICardGameLevel;
    cardSelected: boolean;
    showAnswer: boolean
}

const initCards: ICardGameCard[] = [
    {
        correctAnswer: false,
        image: require("../../images/balloonCool.png"),
        selected: false,
        id: 0
    },
    {
        correctAnswer: true,
        selected: false,
        image: require("../../images/balloonHot.png"),
        id: 1
    },
    {
        correctAnswer: false,
        selected: false,
        image: require("../../images/batmanHot.png"),
        id: 2
    },
    {
        correctAnswer: false,
        selected: false,
        image: require("../../images/batmanCool.png"),
        id: 3
    }
]


const initState: ICardGameReducer = {
    seenLevels: [],
    level: {
        id: 4,
        headerText: "Choose the picture of a 'Hot' thought",
        cards: initCards
    },
    showAnswer: false,
    cardSelected: false
}

const selectCard: (cards: ICardGameCard[], id: number) => ICardGameCard[] = (cards: ICardGameCard[], id: number) => {
    return cards.map(card => {
        if (card.id === id) {
            return {
                ...card,
                selected: true
            }
        } else {
            return {
                ...card,
                selected: false
            }
        }
    })
}

export const cardGameReducer = (state: ICardGameReducer = initState, action: any) => {
    switch (action.type) {
        case "_DUO_SELECT_CARD":
            return {
                ...state,
                cardSelected: true,
                level: {
                    ...state.level,
                    cards: selectCard(state.level.cards, action.payload.id)
                }
            }
        case "CARDGAME_SHOW_ANSWER":
            return {
                ...state,
                seenLevels: [...state.seenLevels, state.level.id],
                showAnswer: true,
            }

        case "CARDGAME_NEW_LEVEL":
        case "_DUO_CONFIRM_SELECTION":
            return {
                ...state,
                level: action.payload.level,
                showAnswer: false,
                cardSelected: false
            }
        default: return state
    }
}