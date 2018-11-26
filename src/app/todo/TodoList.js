import React from "react";
import { connect } from "react-redux";
import ConnectedTodoItem from "./TodoItem";
import { getTodoAsIds } from "./selectors";

function TodoList({ todosAsIds }) {
  return (
    <div>
      {todosAsIds.map(todoId => (
        <ConnectedTodoItem key={todoId} todoId={todoId} />
      ))}
    </div>
  );
}

const mapStateToPropsList = state => ({
  todosAsIds: getTodoAsIds(state)
});

const ConnectedTodoList = connect(mapStateToPropsList)(TodoList);
export default ConnectedTodoList;
