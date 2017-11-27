import { Action } from "redux"

export interface IPayloadAction<p> extends Action {
    payload: p
}