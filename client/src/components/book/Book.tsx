import React from "react";
import styleable from 'react-styleable'

import CSS from "./book.css";

class Book extends React.Component {
    state = {
        progress: false
    }

    render () {
        return (
            <div className={this.props.css.container}>
                <input type="text" />
                <input type="text" />
                <input type="button" value="Add"/>
            </div>
        );
    }
}

export default styleable(CSS)(Book);