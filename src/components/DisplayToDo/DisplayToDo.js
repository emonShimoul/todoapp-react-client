import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const DisplayToDo = ({ td }) => {
    // console.log(td);
    const { _id, title, desc, state } = td;
    const [stateData, setStateData] = useState({});
    // console.log(state);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        setStateData(value);
    }

    const handleChangeStatus = ({ _id }) => {
        // console.log(stateData, _id);
        const finalData = {
            state: stateData,
            id: _id
        }
        console.log(finalData.state);
        if (finalData.state === 'todo' || finalData.state === 'inprogress' || finalData.state === 'done') {
            console.log(finalData);
            fetch(`http://localhost:5000/todoInfo`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalData)
            })
            alert("State Changed!!");
            document.location.reload();
        }

        else {
            alert("Please Select a State!!")
        }
    }

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/todoInfo`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_id)
        })
        alert("Deleted!!");
        document.location.reload();
    }

    return (
        <tbody id="tableBody">
            <tr>
                <td>{title}</td>
                <td>{desc}</td>
                <td>{state}</td>
                <td>
                    <Form.Select
                        onBlur={handleOnChange}
                        id="select"
                        className='w-50 d-inline'
                        aria-label="Default select example"
                    >
                        <option>Change</option>
                        <option value="todo">TODO</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>
                    </Form.Select>
                    <button onClick={() => handleChangeStatus({ _id })} className="btn btn-sm btn-warning ms-2 py-2" type='submit'>Change</button>
                </td>
                <td><button onClick={() => handleDelete({ _id })} className="btn btn-sm btn-danger ms-2" type='submit'>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default DisplayToDo;