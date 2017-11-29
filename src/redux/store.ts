import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer,
    cardGameReducer,
    ICardGameReducer,
    wordGameReducer,
    IWordGameReducer,
    gameTypeReducer,
    IGameTypeReducer

} from "./reducers/index";
import logger from "redux-logger"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    cardGameReducer: ICardGameReducer
    wordGameReducer: IWordGameReducer
    gameTypeReducer: IGameTypeReducer
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    cardGameReducer,
    wordGameReducer,
    gameTypeReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
