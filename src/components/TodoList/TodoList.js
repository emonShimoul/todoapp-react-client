import React from 'react';
import { Form } from 'react-bootstrap';

const TodoList = () => {
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
                    <tbody id="tableBody">
                        <tr>
                            <td>Get Some Coffee</td>
                            <td>You need coffee as u r a coder</td>
                            <td>TODO</td>
                            <td>
                                <Form.Select className='w-50 d-inline' aria-label="Default select example">
                                    <option>Change</option>
                                    <option value="todo">TODO</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="done">Done</option>
                                </Form.Select>
                                <button className="btn btn-sm btn-warning ms-2 py-2">Change</button>
                            </td>
                            <td><button className="btn btn-sm btn-danger ms-2">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;