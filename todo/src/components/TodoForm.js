import React, { useState } from 'react';

const TodoForm = ({dispatch}) => {
    const [todoText, setTodoText] = useState('');

    const handleChanges = (e) => {
        setTodoText(e.target.value);
        console.log(todoText);
    };

   const addTodo = e => {
       e.preventDefault();
       dispatch({type: 'ADD_TODO', payload: todoText})
       setTodoText("");
   }

   const clearCompleted = e => {
       e.preventDefault();
       dispatch({type: 'CLEAR_COMPLETED'})
   }

    
    
    return (
        <form>
            <input type='text' name='item' placeholder='Enter todo item' value={todoText} onChange={handleChanges} />
            <button onClick={addTodo}>Add Item</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;

