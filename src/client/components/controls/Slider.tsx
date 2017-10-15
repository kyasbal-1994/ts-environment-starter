import * as React from "react";
import TemporaryEventWatcher from "../../tool/TemporaryEventWatcher";
import ISliderState from "./Schema/ISliderState";
import style from "./Style/Slider.styl";
export default class Slider extends React.Component<{}, ISliderState> {

    constructor(props: void) {
        super(props);
        this.state = this.getInitialState();
    }
    public render() {
        let gripStyle = style.grip;
        if (this.state.holded) {
            gripStyle += " " + style.hold;
        }
        return (
            <div className={style.outerContainer}>
                <div className={style.innerContainer} ref="innerContainer">
                    <div className={gripStyle} onTouchStart={this.onTouchStart.bind(this)} onMouseDown={this.onMouseDown.bind(this)} ref="grip">
                    </div>
                </div>
            </div>);
    }

    public get holded(): boolean {
        return this.state.holded;
    }

    public set holded(v: boolean) {
        if (this.state.holded !== v) {
            this.setState({
                ...this.state,
                holded: v,
            });
        }
    }

    public getInitialState(): ISliderState {
        return {
            holded: false,
        };
    }

    private _lastX: number;

    private _lastValue = 0;

    private get lastPercentage(): number {
        return this._lastValue;
    }

    private set lastPercentage(v: number) {
        this._lastValue = Math.max(Math.min(v, 1), 0);
    }

    public onTouchStart(): void {
        this.holded = true;
        TemporaryEventWatcher.watchDocument("touchmove", "touchend", (e: TouchEvent) => {
            const inner = this.refs["innerContainer"] as HTMLDivElement;
            const width = inner.getBoundingClientRect().width;
            const grip = this.refs["grip"] as HTMLDivElement;
            if (this._lastX === void 0) {
                this._lastX = e.touches[0].clientX;
            } else {
                const movement = e.touches[0].clientX - this._lastX;
                this._lastX = e.touches[0].clientX;
                this.lastPercentage += movement / width;
                grip.style.left = `${this.lastPercentage * width}px`;
            }
        }, () => {
            this.holded = false;
            this._lastX = void 0;
        });
    }

    public onMouseDown(): void {
        this.holded = true;
        TemporaryEventWatcher.watchDocument("mousemove", "mouseup", (e: MouseEvent) => {
            const inner = this.refs["innerContainer"] as HTMLDivElement;
            const width = inner.getBoundingClientRect().width;
            const grip = this.refs["grip"] as HTMLDivElement;
            if (this._lastX === void 0) {
                this._lastX = e.clientX;
            } else {
                const movement = e.clientX - this._lastX;
                this._lastX = e.clientX;
                this.lastPercentage += movement / width;
                grip.style.left = `${this.lastPercentage * width}px`;
            }
        }, () => {
            this.holded = false;
            this._lastX = void 0;
        });
    }
}
