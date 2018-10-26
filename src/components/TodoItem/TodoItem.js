import React from "react";
import "./TodoItem.css"
import icon from "../../img/edit.png"
import TodoInput from "../TodoInput/TodoInput";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        };

        this.changeStatus = this.changeStatus.bind(this);
        this.openEditField = this.openEditField.bind(this);
        this.closeEditField = this.closeEditField.bind(this);
    }

    openEditField() {
        this.setState({isEdit: true});
    }

    closeEditField() {
        this.setState({isEdit: false});
    }

    changeStatus() {
        this.props.changeTodo(this.props.index, !this.props.isDone)
    }

    render() {
        if (this.state.isEdit) {
            return <TodoInput isEdit={true}
                              title={this.props.title}
                              index={this.props.index}
                              changeTodo={this.props.changeTodo}
                              closeEditField={this.closeEditField}/>;
        }
        return (
            <div className="list-item">
                <h2 className="list-item__title">
                    {this.props.title}
                    <img alt="edit todo item"
                         src={icon}
                         className="list-item__edit-icon"
                         hidden={true}
                         onClick={this.openEditField}
                    />
                </h2>
                <button className={`list-item__status-btn
                ${this.props.isDone
                    ? "list-item__status-btn--done"
                    : "list-item__status-btn--new"}`}
                        onClick={this.changeStatus}>
                    {this.props.isDone ? "Done" : "New"}
                </button>
            </div>
        );
    }
}