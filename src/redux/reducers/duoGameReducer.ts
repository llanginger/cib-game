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
        selected: false,
        id: 0
    },
    {
        correctAnswer: true,
        selected: false,
        id: 1
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