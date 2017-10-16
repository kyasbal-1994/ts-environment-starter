import * as React from "react";
import IToggleButtonGroupProps from "./Schema/IToggleButtonGroupProps";
import IToggleButtonGroupState from "./Schema/IToggleButtonGroupState";
import style from "./Style/ToggleButtonGroup.styl";
import ToggleButton from "./ToggleButton";
export default class ToggleButtonGroup extends React.Component<IToggleButtonGroupProps, IToggleButtonGroupState> {
    constructor(props: IToggleButtonGroupProps) {
        super(props);
        this.state = {
            selectedItem: props.items[0],
        };
    }
    public render() {
        const list = [];
        for (let i = 0; i < this.props.items.length; i++) {
            list.push((
                <ToggleButton key={i} selected={this.state.selectedItem === this.props.items[i]} text={this.props.items[i]} onSelect={this._onSelect.bind(this)} />
            ));
        }
        return (
            <div className={style.container}>
                {list}
            </div>
        );
    }

    private _onSelect(item: string): void {
        this.setState({
            selectedItem: item,
        });
    }
}
