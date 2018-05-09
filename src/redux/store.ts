import { combineReducers, createStore, applyMiddleware } from "redux";
import {
    userReducer,
    IUserReducer,
    deviceTypeReducer,
    IDeviceTypeReducer,
    sandiwchBoardReducer,
    ISandwichBoardReducer,
    userPreferencesReducer,
    IUserPreferencesReducer,
    scoreReducer,
    IScoreReducer,
    robotGameReducer,
    IRobotGameReducer,
    gameLevelReducer,
    IGameLevelTypeReducer,
    scoreScreenReducer,
    IReadyScreenReducer,
    emojiGameReducer,
    IEmojiGameReducer
} from "./reducers/index";
import logger from "redux-logger";
export * from "./reducers/index";

export interface IReducers {
    userReducer: IUserReducer;
    deviceTypeReducer: IDeviceTypeReducer;
    sandiwchBoardReducer: ISandwichBoardReducer;
    userPreferencesReducer: IUserPreferencesReducer;
    scoreReducer: IScoreReducer;
    robotGameReducer: IRobotGameReducer;
    gameLevelReducer: IGameLevelTypeReducer;
    readyScreenReducer: IReadyScreenReducer;
    emojiGameReducer: IEmojiGameReducer;
}

const reducers = combineReducers({
    userReducer,
    deviceTypeReducer,
    sandiwchBoardReducer,
    userPreferencesReducer,
    scoreReducer,
    robotGameReducer,
    gameLevelReducer,
    readyScreenReducer: scoreScreenReducer,
    emojiGameReducer
});

export const store = createStore(reducers, applyMiddleware(logger));
