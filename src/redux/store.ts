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
    sandiwchBoardReducer,
    ISandwichBoardReducer,
    userPreferencesReducer,
    IUserPreferencesReducer,
    laiaScoreReducer,
    ILaiaScoreReducer,
    robotGameReducer,
    IRobotGameReducer,
    gameLevelTypeReducer,
    IGameLevelTypeReducer
} from "./reducers/index";
import logger from "redux-logger";
export * from "./reducers/index";

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    deviceTypeReducer: IDeviceTypeReducer;
    cardGameReducer: ICardGameReducer;
    sandiwchBoardReducer: ISandwichBoardReducer;
    wordGameReducer: IWordGameReducer;
    gameTypeReducer: IGameTypeReducer;
    colorsReducer: IColorsReducer;
    userPreferencesReducer: IUserPreferencesReducer;
    laiaScoreReducer: ILaiaScoreReducer;
    robotGameReducer: IRobotGameReducer;
    gameLevelTypeReducer: IGameLevelTypeReducer;
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    deviceTypeReducer,
    colorsReducer,
    cardGameReducer,
    wordGameReducer,
    sandiwchBoardReducer,
    userPreferencesReducer,
    gameTypeReducer,
    laiaScoreReducer,
    robotGameReducer,
    gameLevelTypeReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
