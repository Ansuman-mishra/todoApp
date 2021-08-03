import React, { Component } from "react";

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    create(e) {
        e.preventDefault();

        if (!this.state.text) {
            alert("Please enter a task name.");
            return;
        } else if (this.props.toDoItems.map((element) => element.name).indexOf(this.state.text) != -1) {
            alert("This task already exists.");
            this.state.text = "";
            return;
        }

        this.props.createItem(this.state.text);
        this.state.text = "";
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.create.bind(this)} className="d-flex justify-content-around">
                    <input
                        ref="newItemInput"
                        onChange={(e) => {
                            this.setState({ text: e.target.value });
                        }}
                        type="text"
                        placeholder="Enter the list"
                        className="mt-2"
                    />
                    <button
                        className=" btn btn-primary font-weight-bold text-center d-flex justify-content-center align-items-center "
                        type="submit"
                    >
                        <span>Create</span>
                    </button>
                </form>
            </div>
        );
    }
}
