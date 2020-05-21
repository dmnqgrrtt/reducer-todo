import React, { useReducer, useState } from 'react';
import { todoReducer, initialState } from "../reducers";

const TodoList = () => {
    const [todoItemState, dispatch ] = useReducer(todoReducer, initialState);
    const [todoList, setTodoList ] = useState([initialState]);

    return (
        <div>
            {todoList.map(item => (
                <div>
                    {item.item}
                </div>
            ))}
        </div>
    );
};

export default TodoList;