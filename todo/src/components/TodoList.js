import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from "../reducers";
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todoItemState, dispatch ] = useReducer(todoReducer, initialState);
    const [todoList, setTodoList ] = useState([initialState]);   
    
    const addTodo = (e) => {
        e.preventDefault();
        
        setTodoList([...todoList, todoItemState ]);
        
       
    };
    

    const toggleCompleted = (currentItem) =>{
        dispatch({type: 'COMPLETED'});
        
        setTodoList(todoList.map(item => {
            
            if(currentItem === item) {
                console.log('items val, red cal', item.completed, todoItemState.completed)
                if(item.completed === todoItemState.completed){
                    return {...item, completed: !todoItemState.completed}
                }
                return {...item, completed: todoItemState.completed};
                
                
            }
            return item;
            
            
        }))
        
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} dispatch={dispatch} />
            {todoList.map(item => (
                <div className={`${item.completed ? "completed" : ""}`} 
                    onClick={() => {toggleCompleted(item)} }
                    key={item.id}
                    >
                    <Todo item={item} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;