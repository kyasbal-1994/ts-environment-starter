import * as React from "react";
import { ChromePicker } from "react-color";
import style from "./Style/ColorPicker.styl";
export default class ColorPicker extends React.Component {
    public render() {
        return (
            <div className={style.colorPickerContainer}>
                <ChromePicker />
            </div>
        );
    }
}
