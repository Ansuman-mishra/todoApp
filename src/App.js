import React, { Component } from "react";
import "./App.css";
import CreateTodo from "./CreateTodo";

import TodoMainList from "./TodoMainList";
const toDoItems = [];
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems,
        };
    }

    createItem(item) {
        this.state.toDoItems.unshift({
            name: item,
            completed: false,
        });
        this.setState({
            toDoItems: this.state.toDoItems,
        });
    }

    findItem(item) {
        return this.state.toDoItems.filter((element) => element.name === item)[0];
    }

    toggle(item) {
        let selectedItem = this.findItem(item);
        selectedItem.completed = !selectedItem.completed;
        this.setState({ toDoItems: this.state.toDoItems });
    }

    saveItem(oldItem, newItem) {
        let selectedItem = this.findItem(oldItem);
        selectedItem.name = newItem;
        this.setState({ toDoItems: this.state.toDoItems });
    }

    deleteItem(item) {
        let index = this.state.toDoItems.map((element) => element.name).indexOf(item);
        this.state.toDoItems.splice(index, 1);
        this.setState({ toDoItems: this.state.toDoItems });
    }
    // console.log(arrData);
    render() {
        return (
            <>
                <div className="container-fluid d-flex justify-content-center align-items-center vw-100 vh-100 bg-info">
                    <div className="container w-51">
                        <div className="row">
                            <div className="col">
                                <div className="card vh-60 round">
                                    <br />
                                    <div className="card-header bg-success rounded">
                                        <h1 className="text-center bg-success text-white">Todo List</h1>
                                    </div>
                                    <div className="card-body text-center d-flex  flex-column">
                                        <CreateTodo
                                            toDoItems={this.state.toDoItems}
                                            createItem={this.createItem.bind(this)}
                                        />
                                        <TodoMainList
                                            toDoItems={this.state.toDoItems}
                                            deleteItem={this.deleteItem.bind(this)}
                                            saveItem={this.saveItem.bind(this)}
                                            toggle={this.toggle.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
