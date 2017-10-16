import { Action } from "redux";
type IReduxAction = IMovePageAction;

export default IReduxAction;

export interface IMovePageAction extends Action {
    type: "MOVE_PAGE";
    to: "next" | "prev";
}
