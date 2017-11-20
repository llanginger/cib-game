export interface IDuoGameCard {
    image?: any;
    correctAnswer: boolean;
    selected: boolean;
    id: number
}

export interface IDuoTextGameWord {
    word: string, correct: boolean
}
export interface IDuoTextGameLevel {
    headerText: string;
    level: {
        image: string;
        words: IDuoTextGameWord[]
    }
}

export interface IDuoGameReducer {
    level: {
        headerText: string;
        cards: IDuoGameCard[]
    };
    textGameLevel: IDuoTextGameLevel
    cardSelected: boolean
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

const dummyTextGameLevel: IDuoTextGameLevel = {
    headerText: "Pick a word",
    level: {
        image: require("../../images/balloonCool.png"),
        words: [
            {
                word: "Yes",
                correct: false
            },
            {
                word: "No",
                correct: false
            },
            {
                word: "Yes",
                correct: false
            },
            {
                word: "No",
                correct: false
            },
            {
                word: "Yes",
                correct: false
            },
            {
                word: "sentence",
                correct: true
            },
            {
                word: "Yes",
                correct: false
            },
            {
                word: "No",
                correct: false
            },
        ]
    }
}
const initState: IDuoGameReducer = {
    level: {
        headerText: "Choose the picture of a 'Hot' thought",
        cards: dummyCards
    },
    textGameLevel: dummyTextGameLevel,
    cardSelected: false
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
                cardSelected: true,
                level: {
                    ...state.level,
                    cards: selectCard(state.level.cards, action.payload.id)
                }
            }
        case "_DUO_CONFIRM_SELECTION":
            return {
                ...initState,
                level: action.payload.levels

            }
        default: return state
    }
}