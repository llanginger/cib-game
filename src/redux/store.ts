import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer
} from "./reducers/index";
import logger from "redux-logger"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
}

const reducers = combineReducers({
    scoreReducer,
    userReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
