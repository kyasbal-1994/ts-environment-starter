import { Action0 } from "../../../common/Action";
export default interface IButtonBeltProps {
    type: "nextprev" | "dance";
    prevDisabled: boolean;
    onNextClick: Action0;
    onPrevClick: Action0;
}
