import * as React from "react";
import style from "./Style/ShakeIndicate.styl";
export default class ShakeIndicate extends React.Component {
    public render() {
        return (
            <div className={style.container}>
                <p className={style.text}>5秒間で寿司の踊りをスマフォを振って表現してください</p>
                <img src="./shake.svg" />
            </div>
        );
    }
}
