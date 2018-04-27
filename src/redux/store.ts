import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    scoreReducer,
    IScoreReducer,
    userReducer,
    IUserReducer,
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
    IGameLevelTypeReducer,
    readyScreenReducer,
    IReadyScreenReducer,
    emojiGameReducer,
    IEmojiGameReducer
} from "./reducers/index";
import logger from "redux-logger";
export * from "./reducers/index";

export interface IReducers {
    scoreReducer: IScoreReducer;
    userReducer: IUserReducer;
    deviceTypeReducer: IDeviceTypeReducer;
    sandiwchBoardReducer: ISandwichBoardReducer;
    colorsReducer: IColorsReducer;
    userPreferencesReducer: IUserPreferencesReducer;
    laiaScoreReducer: ILaiaScoreReducer;
    robotGameReducer: IRobotGameReducer;
    gameLevelTypeReducer: IGameLevelTypeReducer;
    readyScreenReducer: IReadyScreenReducer;
    emojiGameReducer: IEmojiGameReducer;
}

const reducers = combineReducers({
    scoreReducer,
    userReducer,
    deviceTypeReducer,
    colorsReducer,
    sandiwchBoardReducer,
    userPreferencesReducer,
    laiaScoreReducer,
    robotGameReducer,
    gameLevelTypeReducer,
    readyScreenReducer,
    emojiGameReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
