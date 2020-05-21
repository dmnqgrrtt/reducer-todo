import React, { useState } from 'react';

const TodoForm = ({addTodo, dispatch}) => {
    const [todoText, setTodoText] = useState('');

    const handleChanges = (e) => {
        setTodoText(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        addTodo(e);
        setTodoText("");
        
    }

    
    
    return (
        <form onSubmit={submit} >
            <input type='text' name='item' placeholder='Enter todo item' value={todoText} onChange={handleChanges} />
            <button type='submit' onClick={() => {dispatch({type: 'ADD_TODO', payload: todoText})}}>Add Item</button>
        </form>
    );
};

export default TodoForm;

