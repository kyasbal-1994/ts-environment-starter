import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import style from "./app.styl";
import ButtonBelt from "./components/ButtonBelt";
import ColorPicker from "./components/controls/ColorPicker";
import Instruction from "./components/controls/Instruction";
import ShakeIndicate from "./components/controls/ShakeIndicate";
import Slider from "./components/controls/Slider";
import ToggleButtonGroup from "./components/controls/ToggleButtonGroup";
import { NextPage, PrevPage } from "./model/ActionCreators";
import { IAppStore } from "./model/AppConnector";
import { IAppState } from "./model/IAppState";
import IReduxAction from "./model/IReduxAction";
import { ControlPage, default as IPage } from "./Schema/IPage";
class App extends React.Component<IAppStore> {
    public render() {
        return this._fromPage(this.props.state.page);
    }

    private _fromPage(page: IPage) {
        switch (page.type) {
            case "control":
                return (
                    <div className={style.appLayout}>
                        <ButtonBelt type="nextprev" prevDisabled={!page.canback} onNextClick={this._onNext.bind(this)} onPrevClick={this._onPrev.bind(this)} />
                        {this._fromControl(page)}
                        <Instruction text={page.text} />
                        <div className={style.titleContainer}>
                            <img className={style.title} src="./sushi-title.svg" />
                        </div>
                    </div>
                );
            case "dance":
                return (
                    <div className={style.appLayout}>
                        <ButtonBelt type="dance" prevDisabled={false} onNextClick={this._onNext.bind(this)} onPrevClick={this._onPrev.bind(this)} />
                        <div className={style.titleContainer}>
                            <img className={style.title} src="./sushi-title.svg" />
                        </div>
                    </div>
                );
        }
    }

    private _fromControl(page: ControlPage) {
        switch (page.controlerType) {
            case "color":
                return (
                    <ColorPicker />
                );
            case "slider":
                return (
                    <Slider />
                );
            case "dropdown":
                return (
                    <ToggleButtonGroup items={["握り", "いくら軍艦"]} />
                );
            case "shakeIndicate":
                return (
                    <ShakeIndicate />
                );
        }
    }

    private _onNext(): void {
        this.props.dispatch(NextPage());
    }

    private _onPrev(): void {
        this.props.dispatch(PrevPage());
    }
}

export default connect((state: IAppState) => ({ state }), (dispatch: Dispatch<IReduxAction>) => ({ dispatch }))(App as any);
