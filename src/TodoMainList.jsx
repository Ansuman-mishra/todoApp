import React, { Component } from "react";
import TodoList from "./TodoList";

export default class TodoMainList extends Component {
    render() {
        return (
            <>
                {this.props.toDoItems.map((item, index) => (
                    <TodoList key={index} {...item} {...this.props} />
                ))}
            </>
        );
    }
}
