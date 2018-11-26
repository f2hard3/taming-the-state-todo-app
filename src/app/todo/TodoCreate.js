import React from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { doAddTodoWithNotification } from "./actionCreators";

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onCreateTodo = this.onCreateTodo.bind(this);
  }

  onChangeName(event) {
    this.setState({ value: event.target.value });
  }

  onCreateTodo(event) {
    this.props.onAddTodo(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCreateTodo}>
          <input
            type="text"
            placeholder="Add Todo..."
            value={this.state.value}
            onChange={this.onChangeName}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToPropsCreate = dispatch => ({
  onAddTodo: name => dispatch(doAddTodoWithNotification(uuid(), name))
});

const ConnectedTodoCreate = connect(
  null,
  mapDispatchToPropsCreate
)(TodoCreate);

export default ConnectedTodoCreate;
