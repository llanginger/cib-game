import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer,
    duoGameReducer,
    IDuoGameReducer,
    duoTextGameReducer,
    IDuoTextGameReducer,
    gameTypeReducer,
    IGameTypeReducer

} from "./reducers/index";
import logger from "redux-logger"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    duoGameReducer: IDuoGameReducer
    duoTextGameReducer: IDuoTextGameReducer
    gameTypeReducer: IGameTypeReducer
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    duoGameReducer,
    duoTextGameReducer,
    gameTypeReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
