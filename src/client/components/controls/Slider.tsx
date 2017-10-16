import * as React from "react";
import TemporaryEventWatcher from "../../tool/TemporaryEventWatcher";
import ISliderState from "./Schema/ISliderState";
import style from "./Style/Slider.styl";
export default class Slider extends React.Component<{}, ISliderState> {
    private _lastX: number;

    private _lastValue = 0;

    constructor(props: {}) {
        super(props);
        this.state = this.getInitialState();
    }
    public render() {
        let gripStyle = style.grip;
        if (this.state.holded) {
            gripStyle += " " + (style.hold as string);
        }
        return (
            <div className={style.outerContainer}>
                <div className={style.innerContainer} ref="innerContainer">
                    <div className={gripStyle} onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)} onMouseDown={this.onMouseDown.bind(this)} ref="grip">
                    </div>
                </div>
                <p ref="percentage" className={style.percentageLabel}>0%</p>
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

    private get lastPercentage(): number {
        return this._lastValue;
    }

    private set lastPercentage(v: number) {
        this._lastValue = Math.max(Math.min(v, 1), 0);
    }

    private onTouchStart(): void {
        this.holded = true;
        TemporaryEventWatcher.watchDocument("touchmove", "touchend", (e: TouchEvent) => {
            const inner = this.refs["innerContainer"] as HTMLDivElement;
            const width = inner.getBoundingClientRect().width;
            if (this._lastX === void 0) {
                this._lastX = e.touches[0].clientX;
            } else {
                const movement = e.touches[0].clientX - this._lastX;
                this._lastX = e.touches[0].clientX;
                this.lastPercentage += movement / width;
                this._setPercentage(this.lastPercentage);
            }
        }, () => {
            this.holded = false;
            this._lastX = void 0;
        });
    }

    private onTouchEnd(): void {
        this.holded = false;
        this._lastX = void 0;
    }

    private onMouseDown(): void {
        this.holded = true;
        TemporaryEventWatcher.watchDocument("mousemove", "mouseup", (e: MouseEvent) => {
            const inner = this.refs["innerContainer"] as HTMLDivElement;
            const width = inner.getBoundingClientRect().width;
            if (this._lastX === void 0) {
                this._lastX = e.clientX;
            } else {
                const movement = e.clientX - this._lastX;
                this._lastX = e.clientX;
                this.lastPercentage += movement / width;
                this._setPercentage(this.lastPercentage);
            }
        }, () => {
            this.holded = false;
            this._lastX = void 0;
        });
    }

    private _setPercentage(percentage: number): void {
        const grip = this.refs["grip"] as HTMLDivElement;
        const inner = this.refs["innerContainer"] as HTMLDivElement;
        const percentageLabel = this.refs["percentage"] as HTMLParagraphElement;
        const width = inner.getBoundingClientRect().width;
        grip.style.left = `${percentage * width}px`;
        percentageLabel.innerText = `${(percentage * 100).toFixed()}%`;
    }
}
