import React from "react";
import { connect } from "react-redux";
import { getTodo } from "./selectors";
import { doToggleTodo } from "./actionCreators";

function TodoItem({ todo, onToggleTodo }) {
  const { name, id, completed } = todo;
  return (
    <div>
      {name}
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
}

const mapStateToPropsItem = (state, props) => ({
  todo: getTodo(state, props.todoId)
});

const mapDispatchToPropsItem = dispatch => ({
  onToggleTodo: id => dispatch(doToggleTodo(id))
});

const ConnectedTodoItem = connect(
  mapStateToPropsItem,
  mapDispatchToPropsItem
)(TodoItem);

export default ConnectedTodoItem;
