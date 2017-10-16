import { Action0 } from "../../../../common/Action";
export default interface IButtonProps {
    disabled: boolean;
    iconSrc: string;
    type: "prev" | "next";
    onClick: Action0;
}
