import * as React from "react";
import style from "./Style/Instruction.styl";
export default class Instruction extends React.Component {
    public render() {
        return (
            <div>
                <p className={style.instruction}>ネタの色をえらんでください</p>
            </div>
        );
    }
}
