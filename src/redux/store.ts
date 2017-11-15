import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer,
    duoGameReducer,
    IDuoGameReducer
} from "./reducers/index";
import logger from "redux-logger"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    duoGameReducer: IDuoGameReducer
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    duoGameReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
