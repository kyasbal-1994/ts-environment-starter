import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app";

class WrappedApp extends React.Component {
    public render() {
        return (
            <Provider>
                <App />
            </Provider>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<WrappedApp />, document.body);
});
