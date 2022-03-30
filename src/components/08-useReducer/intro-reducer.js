const initialState = [
  {
    id: 5,
    todo: "Hacer ejercicio",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "agregar":
      return [...state, action.payload];
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 6,
  todo: "Aprender Angular",
  done: true,
};

const action = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(initialState, action);

console.log(todos);
