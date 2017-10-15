import * as React from "react";
import IButtonProps from "./Schema/IButtonProps";
import style from "./Style/Button.styl";

export default class Button extends React.Component<IButtonProps> {
    public render() {
        let typeClass = "";
        if (this.props.type === "prev") {
            typeClass = style.prevButton;
        } else {
            typeClass = style.nextButton;
        }
        return (
            <div className={`${style.buttonOuter} ${typeClass}`}>
                <p><img src={this.props.iconSrc} /></p>
            </div>
        );
    }
}
