import React from "react";
import ConnectedFilter from "./filter/Filter";
import ConnectedTodoCreate from "./todo/TodoCreate";
import ConnectedTodoList from "./todo/TodoList";
import ConnectedNotifications from "./notification/Notifications";

export default function TodoApp() {
  return (
    <div>
      <ConnectedFilter />
      <ConnectedTodoCreate />
      <ConnectedTodoList />
      <ConnectedNotifications />
    </div>
  );
}
