import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: '', done: false}); //create todoo local state variable
    const todoChangeHandler = (event) => { //handle keystroke changes in input field
        const doValue = event.target.value; // get data from input field
        const newTodo = { //create new todoo object instance
            do: doValue //setting the todoo do property
        };
        setTodo(newTodo); // change local state todos variable
    }

    const dispatch = useDispatch(); // create a dispatch
    const createTodoClickHandler = () => { //handle create event
        const action = { //create action object
            type: 'create-todo', // required action type
            todo //payload
        };
        dispatch(action); //send action to reducer
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className={"list-group-item"}>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className={"form-control"}/>
                    <button onClick={createTodoClickHandler}
                            className={"btn btn-primary"}>Create New Todo</button>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler({...todo, done: event.target.checked})}
                                   type={"checkbox"}/>

                            {todo.do}
                            <button onClick={()=>deleteTodoClickHandler(todo)} //return value enabled by ()=>
                                    className={"btn btn-danger float-end"}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Todos;