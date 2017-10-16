import { Action1 } from "../../../../common/Action";

export default interface IToggleButtonProps {
    selected: boolean;
    text: string;
    onSelect: Action1<string>;
}
