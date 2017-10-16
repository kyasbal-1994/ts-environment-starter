import * as React from "react";
import IToggleButtonProps from "./Schema/IToggleButtonProps";
import style from "./Style/ToggleButton.styl";
export default class ToggleButton extends React.Component<IToggleButtonProps> {
    public render() {
        const suffix = this.props.selected ? "-selected" : "";
        return (
            <div className={style["container" + suffix]} onClick={this._onSelect.bind(this)}>
                <p className={style["text" + suffix]}>{this.props.text}</p>
            </div>
        );
    }

    public _onSelect(): void {
        if (!this.props.selected) {
            this.props.onSelect(this.props.text);
        }
    }
}
