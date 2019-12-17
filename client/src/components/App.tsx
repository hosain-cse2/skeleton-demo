import React from "react";

import Book from "./book";
import CSS from "./app.css";

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