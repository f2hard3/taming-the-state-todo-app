import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_ADD_WITH_NOTIFICATION
} from "../store/actionTypes";

export const doAddTodo = (id, name) => ({ type: TODO_ADD, todo: { id, name } });

export const doToggleTodo = id => ({ type: TODO_TOGGLE, todo: { id } });

export const doAddTodoWithNotification = (id, name) => ({
  type: TODO_ADD_WITH_NOTIFICATION,
  todo: { id, name }
});
