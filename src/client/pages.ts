import IPage from "./Schema/IPage";

const pages = [
    {
        type: "control",
        canback: false,
        text: "雛形をえらんでください",
        target: "template",
        controlerType: "dropdown",
    },
    {
        type: "control",
        canback: true,
        text: "最初の色をえらんでください",
        target: "color1",
        controlerType: "color",
    },
    {
        type: "control",
        canback: true,
        text: "二つ目の色をえらんでください",
        target: "color2",
        controlerType: "color",
    },
    {
        type: "control",
        canback: true,
        text: "最初の値をえらんでください",
        target: "value1",
        controlerType: "slider",
    },
    {
        type: "control",
        canback: true,
        text: "二つ目の値をえらんでください",
        target: "value2",
        controlerType: "slider",
    },
    {
        type: "control",
        canback: false,
        text: "寿司の踊りをきめます",
        target: "",
        controlerType: "shakeIndicate",
    },
    {
        type: "dance",
    },
] as IPage[];

class PageModel {

    private _currentIndex = 0;
    constructor(private _pages: IPage[]) {

    }

    public get current(): IPage {
        return this._pages[this._currentIndex];
    }

    public next(): boolean {
        if (this._pages[this._currentIndex + 1] !== undefined) {
            this._currentIndex++;
            return true;
        } else {
            return false;
        }
    }

    public prev(): boolean {
        if (this._currentIndex > 0) {
            this._currentIndex--;
            return true;
        } else {
            return false;
        }
    }
}

export default new PageModel(pages);
