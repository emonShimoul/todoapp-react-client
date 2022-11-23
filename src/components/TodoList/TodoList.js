import React from 'react';
import useAuth from '../../hooks/useAuth';
import DisplayToDo from '../DisplayToDo/DisplayToDo';

const TodoList = () => {
    const { todo } = useAuth();
    // console.log(todo);
    return (
        <div className='container'>
            <div id="items" className="my-4">
                <h3>Your Items</h3>
                <table className="table mt-4 text-start">
                    <thead>
                        <tr>
                            <th scope="col">Item Title</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">States</th>
                            <th scope="col">Change State</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        todo.map(td => <DisplayToDo
                            key={td._id}
                            td={td}
                        ></DisplayToDo>)
                    }

                </table>
            </div>
        </div>
    );
};

export default TodoList;