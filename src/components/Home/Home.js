import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const [todoInfo, setTodoInfo] = useState({});

    const { saveTodoData } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newTodoInfo = { ...todoInfo };
        newTodoInfo[field] = value;
        setTodoInfo(newTodoInfo);
    }

    const handleAddToList = (e) => {
        saveTodoData(todoInfo);
        e.preventDefault();
        // console.log(todo);
    }

    // console.log(todoInfo);
    return (
        <div className="container my-4">
            <h2 className="text-center">TODOs List</h2>
            <Form onSubmit={handleAddToList} id="todo-info">
                <Form.Group className="mb-3 text-start" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        onBlur={handleOnChange}
                        name="title"
                        type="text"
                        placeholder="Give a Title"
                        required />
                    <Form.Text className="text-muted">
                        Add an item to the list
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onBlur={handleOnChange}
                        name="desc"
                        as="textarea"
                        placeholder="Write a Description"
                        style={{ height: '100px' }}
                        required />
                </Form.Group>

                <Form.Select
                    onBlur={handleOnChange}
                    name="state"
                    className='w-50'
                    aria-label="Default select example"
                >
                    <option>Select State</option>
                    <option value="todo">TODO</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </Form.Select>

                <div className='text-start'>
                    <Button className='mt-4' variant="success" type="submit">
                        Add to List
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Home;