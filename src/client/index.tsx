import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./app";
import reducer from "./model/Reducers";

const store = createStore(reducer);
class WrappedApp extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<WrappedApp />, document.getElementById("app"));
});
