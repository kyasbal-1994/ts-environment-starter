import * as React from "react";
import IInstructionProps from "./Schema/IInstructionProps";
import style from "./Style/Instruction.styl";
export default class Instruction extends React.Component<IInstructionProps> {
    public render() {
        return (
            <div>
                <p className={style.instruction}>{this.props.text}</p>
            </div>
        );
    }
}
