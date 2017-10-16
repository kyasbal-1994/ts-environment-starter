import * as React from "react";
import IButtonProps from "./Schema/IButtonProps";
import style from "./Style/Button.styl";

export default class Button extends React.Component<IButtonProps> {
    private _lastTouchEnd = 0;
    public render() {
        let typeClass = "";
        if (this.props.disabled) {
            typeClass = style.disabled;
        } else {
            if (this.props.type === "prev") {
                typeClass = style.prevButton;
            } else {
                typeClass = style.nextButton;
            }
        }
        return (
            <div className={`${style.buttonOuter} ${typeClass}`} onClick={this.onClick.bind(this)} onTouchEnd={this._cancelTouchEnd.bind(this)}>
                <p><img src={this.props.iconSrc} /></p>
            </div>
        );
    }

    public onClick(): void {
        if (this.props.disabled) {
            return;
        }
        this.props.onClick();
    }

    private _cancelTouchEnd(e: TouchEvent): void {
        const now = Date.now();
        if (now - this._lastTouchEnd < 500) {
            e.preventDefault();
        }
        this._lastTouchEnd = now;
    }
}
