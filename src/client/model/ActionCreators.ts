import { IMovePageAction } from "./IReduxAction";

export let NextPage: () => IMovePageAction = () => {
    return {
        type: "MOVE_PAGE",
        to: "next",
    };
};

export let PrevPage: () => IMovePageAction = () => {
    return {
        type: "MOVE_PAGE",
        to: "prev",
    };
};
