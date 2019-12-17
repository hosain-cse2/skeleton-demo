import React from "react";
import { createStore } from "redux";

import Book from "./book";
import CSS from "./app.css";

const store = createStore();

export default class App extends React.Component {
    state = {
        progress: false
    }

    render () {
        return (
            <div className={CSS.container}>
                <Book></Book>
            </div>
        );
    }
}