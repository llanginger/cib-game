import { combineReducers, createStore } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer
} from "./reducers/index";

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
}

const reducers = combineReducers({
    scoreReducer,
    userReducer
});

export const store = createStore(reducers);
