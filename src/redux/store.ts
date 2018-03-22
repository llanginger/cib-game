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
    IGameTypeReducer,
    deviceTypeReducer,
    IDeviceTypeReducer,
    colorsReducer,
    IColorsReducer,
    popupReducer,
    IPopupReducer,
    userPreferencesReducer,
    IUserPreferencesReducer,
    laiaScoreReducer,
    ILaiaScoreReducer
} from "./reducers/index";
import logger from "redux-logger"
export * from "./reducers/index"

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    deviceTypeReducer: IDeviceTypeReducer;
    cardGameReducer: ICardGameReducer
    popupReducer: IPopupReducer
    wordGameReducer: IWordGameReducer
    gameTypeReducer: IGameTypeReducer
    colorsReducer: IColorsReducer
    userPreferencesReducer: IUserPreferencesReducer
    laiaScoreReducer: ILaiaScoreReducer
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    deviceTypeReducer,
    colorsReducer,
    cardGameReducer,
    wordGameReducer,
    popupReducer,
    userPreferencesReducer,
    gameTypeReducer,
    laiaScoreReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
