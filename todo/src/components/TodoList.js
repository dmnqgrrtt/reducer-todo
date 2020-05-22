import React, { useReducer } from 'react';
import { todoReducer, initialState } from "../reducers";
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todoListState, dispatch ] = useReducer(todoReducer, initialState);

    
      
    return (
        <div>
            <TodoForm dispatch={dispatch}  />
            {todoListState.map(item => (
                <div 
                className={`${item.completed ? "completed" : ""}`} 
                key={item.id}
                onClick={()=>{
                    dispatch({type: 'TODO_COMPLETED', payload: item.id})
                }}>
                    <Todo item={item} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;