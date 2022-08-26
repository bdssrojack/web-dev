const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];
const todosReducer = (state = data, action) => {
    switch (action.type){
        case 'create-todo': // handle create-todo action type
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getTime()+""
            };
            return[ //create new state as array
                ...state, //copy old data use ...
                newTodo //append new todo at the end of array
            ]

        case 'delete-todo':
            return state.filter(todo => todo !== action.todo)

        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;

        default:
            return state;
    }
}
export default todosReducer;
