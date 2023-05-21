import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "react-bootstrap";
import {Provider} from "react-redux";
import {setStore} from "./store";

const store = setStore();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
)
root.render(
        <React.StrictMode>
            <ThemeProvider>
                <BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>,
)
