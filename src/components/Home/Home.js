import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center">TODOs List</h2>
            <Form>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Give a Title" required />
                    <Form.Text className="text-muted">
                        Add an item to the list
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Write a Description"
                        style={{ height: '100px' }}
                        required />
                </Form.Group>

                <Form.Select className='w-50' aria-label="Default select example">
                    <option>Select States</option>
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

            <div id="items" className="my-4">
                <h3>Your Items</h3>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Item Title</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td>Get Some Coffee</td>
                            <td>You need coffee as u r a coder</td>
                            <td><button className="btn btn-sm btn-primary">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;