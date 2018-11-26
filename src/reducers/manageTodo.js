export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
<<<<<<< HEAD

      console.log({ todos: state.todos.concat(action.payload.text) });

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
=======
 
      console.log({ todos: state.todos.concat(action.payload.text) });
 
      return { todos: state.todos.concat(action.payload.text) };
 
    default:
      return state;
  }
}
>>>>>>> 6edb80233eed1cc9d27108cb6e56a59501946f5f
