import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from "../reducers";

const TodoList = () => {
    const [todoItemState, dispatch ] = useReducer(todoReducer, initialState);
    const [todoList, setTodoList ] = useState([initialState]);
    const [todoText, setTodoText] = useState('');

    const handleChanges = (e) => {
        setTodoText(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        
        setTodoList([...todoList, todoItemState]);
        console.log(todoList);
    };

    return (
        <div>
            <form onSubmit={addTodo} >
                <input type='text' name='item' placeholder='Enter todo item' value={todoText} onChange={handleChanges} />
                <button type='submit' onClick={() => {dispatch({type: 'ADD_TODO', payload: todoText})}}>Add Item</button>
            </form>
            {todoList.map(item => (
                <div key={item.id}>
                    {item.item}
                </div>
            ))}
        </div>
    );
};

export default TodoList;