import { schema, normalize } from "normalizr";
import { v4 as uuid } from "uuid";
import { TODO_ADD, TODO_TOGGLE } from "../store/actionTypes";

const todos = [
  { id: uuid(), name: "Hands On: Snake with Local State" },
  { id: uuid(), name: "Challenge: Snake with Higher Order Components" },
  { id: uuid(), name: "Hands On: Redux Standalone with advanced Actions" },
  { id: uuid(), name: "Hands On: Redux Standalone with advanced Reducers" },
  { id: uuid(), name: "Hands On: Bootstrap App with Redux" },
  { id: uuid(), name: "Hands On: Naive Todo with React and Redux" },
  { id: uuid(), name: "Hands On: Sophisticated Todo with React and Redux" },
  { id: uuid(), name: "Hands On: Connecting State Everywhere" },
  { id: uuid(), name: "Challenge: Snake with React and Redux" },
  { id: uuid(), name: "Hands On: Todo with advanced Redux" },
  { id: uuid(), name: "Hands On: Todo with more Features" },
  { id: uuid(), name: "Challenge: Snake with Redux" },
  { id: uuid(), name: "Hands On: Todo with Notifications" },
  { id: uuid(), name: "Challenge: Snake with Redux and Async Actions" },
  { id: uuid(), name: "Hands On: Hacker News with Redux" },
  { id: uuid(), name: "Challenge: Hacker News with beyond Redux" },
  { id: uuid(), name: "Challenge: Hacker News with beyond Redux" },
  { id: uuid(), name: "Hands On: Snake with MobX" },
  { id: uuid(), name: "Hands On: Todo App with MobX" },
  { id: uuid(), name: "Challenge: Hacker News App with MobX" },
  { id: uuid(), name: "Challenge: Consuming a GrapQL API with Relay" }
];

//schemas

const todoSchema = new schema.Entity("todo");
const normalizedTodos = normalize(todos, [todoSchema]);

const initialTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result
};

export default function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case TODO_ADD:
      return applyAddTodo(state, action);
    case TODO_TOGGLE:
      return applyToggleTodo(state, action);
    default:
      return state;
  }
}

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false };
  const entities = { ...state.entities, [todo.id]: todo };
  const ids = [...state.ids, action.todo.id];
  return { ...state, entities, ids };
}

function applyToggleTodo(state, action) {
  const id = action.todo.id;
  const todo = state.entities[id];
  const toggledTodo = { ...todo, completed: !todo.completed };
  const entities = { ...state.entities, [id]: toggledTodo };
  return { ...state, entities };
}
