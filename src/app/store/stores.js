import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import todoReducer from "../todo/reducer";
import filterReducer from "../filter/reducer";
import notificationReducer from "../notification/reducer";
import { watchAddTodoWithNotification } from "./saga";

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
  notificationState: notificationReducer
});

const logger = createLogger();

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(saga, logger)
);

export default store;

saga.run(watchAddTodoWithNotification);
