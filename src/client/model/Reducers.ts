import Pages from "../pages";
import { createInitialState, IAppState } from "./IAppState";
import IReduxAction from "./IReduxAction";
export default function reducer(state: IAppState = createInitialState(), action: IReduxAction): IAppState {
    switch (action.type) {
        case "MOVE_PAGE":
            if (action.to === "next") {
                Pages.next();
            } else {
                Pages.prev();
            }
            return {
                ...state,
                page: Pages.current,
            };
        default:
            return {
                ...state,
            };
    }
}
