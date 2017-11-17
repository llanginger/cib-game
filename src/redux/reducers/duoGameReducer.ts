export interface IDuoGameCard {
    image?: any;
    correctAnswer: boolean;
    selected: boolean;
    id: number
}

export interface IDuoGameReducer {
    cards: IDuoGameCard[]
}

const dummyCards: IDuoGameCard[] = [
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

const initState: IDuoGameReducer = {
    cards: dummyCards
}

const selectCard: (cards: IDuoGameCard[], id: number) => IDuoGameCard[] = (cards: IDuoGameCard[], id: number) => {
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

export const duoGameReducer = (state: IDuoGameReducer = initState, action: any) => {
    switch (action.type) {
        case "_DUO_SELECT_CARD":
            return {
                ...state,
                cards: selectCard(state.cards, action.payload.id)
            }
        default: return state
    }
}