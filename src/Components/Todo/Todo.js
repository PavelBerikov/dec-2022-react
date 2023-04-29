import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <h2>UserId - {todo.userId}</h2>
            <h4>ID - {todo.id}</h4>
            <div>Title - {todo.title}</div>


        </div>
    );
};

export default Todo;