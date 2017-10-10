import * as React from "react";
import styl from "./test.styl";
console.log(styl);
export default class App extends React.Component {
    public render() {
        return (<div><p className={styl.hello}>Hello</p></div>);
    }
}
