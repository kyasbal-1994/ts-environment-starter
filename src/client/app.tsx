import * as React from "react";
import { ChromePicker, SwatchesPicker } from "react-color";
import { Saturation } from "react-color/lib/components/common";
import { Grid } from "react-flexbox-grid";
import Slider from "./components/controls/Slider";
import style from "./app.styl";
import ButtonBelt from "./components/ButtonBelt";
import Button from "./components/controls/Button";
import ColorPicker from "./components/controls/ColorPicker";
import Instruction from "./components/controls/Instruction";
export default class App extends React.Component {
    public render() {
        const buttons = ["前", "次"];
        return (
            <div className={style.appLayout}>
                <ButtonBelt type="nextprev" prevDisabled={false} />
                <ColorPicker />
                <Instruction />
                <Slider />
            </div>);
    }
}
