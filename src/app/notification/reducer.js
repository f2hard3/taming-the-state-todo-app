import { TODO_ADD, NOTIFICATION_HIDE } from "../store/actionTypes";

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case TODO_ADD:
      return applySetNotifyAboutAddTodo(state, action);
    case NOTIFICATION_HIDE:
      return applyRemoveNotification(state, action);
    default:
      return state;
  }
}

function applySetNotifyAboutAddTodo(state, action) {
  const { name, id } = action.todo;
  return { ...state, [id]: "Todo Created: " + name };
}

function applyRemoveNotification(state, action) {
  const { [action.id]: notificationToRemove, ...restNotifications } = state;
  return restNotifications;
}
