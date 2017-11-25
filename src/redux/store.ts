import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer,
    duoGameReducer,
    IDuoGameReducer,
    duoTextGameReducer,
    IDuoTextGameReducer

} from "./reducers/index";
import logger from "redux-logger"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    duoGameReducer: IDuoGameReducer
    duoTextGameReducer: IDuoTextGameReducer
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    duoGameReducer,
    duoTextGameReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
