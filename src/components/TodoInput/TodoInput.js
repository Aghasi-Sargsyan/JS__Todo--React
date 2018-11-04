import React from "react";
import "./TodoInput.css"

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        };

        this.addTodo = this.addTodo.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }


    addTodo() {
        this.props.addTodo(this.state.inputValue);
        this.setState({inputValue: ""});
    }

    changeTitle() {
        this.props.changeTodo(this.props.index, this.state.inputValue);
        this.props.closeEditField();
    }

    inputChangeHandler(e) {
        this.setState({inputValue: e.target.value});
    }

    componentDidMount() {
        this.props.isEdit && this.setState({inputValue: this.props.title});
    }

    render() {
        return (
            <div className={`input-block ${this.props.isEdit ? "input-block--edit" : ""}`}>
                <input className="input-block__input"
                       type="txt"
                       placeholder="To do text goes here"
                       value={this.state.inputValue}
                       onChange={this.inputChangeHandler}
                />
                <button className="input-block__button"
                        type="button"
                        onClick={this.props.isEdit ? this.changeTitle : this.addTodo}>
                    {this.props.isEdit ? "Update" : "Create"}
                </button>
            </div>
        );
    }
}