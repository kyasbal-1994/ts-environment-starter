import { Dispatch } from "redux";
import { IAppState } from "./IAppState";
import IReduxAction from "./IReduxAction";

export interface IAppStore {
    state?: IAppState;
    dispatch: Dispatch<IReduxAction>;
}
