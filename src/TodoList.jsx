import React from "react";
import "./App.css";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            text: "",
        };
    }

    renderName() {
        const itemStyle = {
            "text-decoration": this.props.completed ? "line-through" : "none",
            cursor: "pointer",
        };

        if (this.state.editing) {
            return (
                <form onSubmit={this.onSave.bind(this)}>
                    <input
                        type="text"
                        onChange={(e) => {
                            this.setState({ text: e.target.value });
                        }}
                        defaultValue={this.props.name}
                    />
                </form>
            );
        }

        return (
            <span style={itemStyle} onClick={this.props.toggle.bind(this, this.props.name)}>
                {this.props.name}
            </span>
        );
    }
    onEdit() {
        this.setState({ editing: true });
    }

    onCancel() {
        this.setState({ editing: false });
    }

    onSave(e) {
        e.preventDefault();
        this.props.saveItem(this.props.name, this.state.text);
        this.setState({ editing: false });
    }

    renderButtons() {
        if (this.state.editing) {
            return (
                <span>
                    <button className="btn btn-primary mr-4" onClick={this.onSave.bind(this)}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={this.onCancel.bind(this)}>
                        Cancel
                    </button>
                </span>
            );
        }

        return (
            <span>
                <button className="btn btn-primary ml-5" onClick={this.onEdit.bind(this)}>
                    Edit
                </button>
            </span>
        );
    }

    render() {
        return (
            <>
                <div className="todo mt-4">
                    <i
                        onClick={this.props.deleteItem.bind(this, this.props.name)}
                        className="fa fa-times-circle"
                        aria-hidden="true"
                    />
                    <li className="li">{this.renderName()}</li>
                    {this.renderButtons()}
                </div>
            </>
        );
    }
}

export default TodoList;
