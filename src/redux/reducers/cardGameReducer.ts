import { initCardGameLevel } from "./initLevels"

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


const initState: ICardGameReducer = {
    seenLevels: [],
    level: initCardGameLevel,
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
        case "INIT_APP":
        case "_DUO_CONFIRM_SELECTION":
            return {
                ...state,
                level: action.payload.cardGameLevel,
                showAnswer: false,
                cardSelected: false
            }
        default: return state
    }
}