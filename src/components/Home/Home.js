import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center">TODOs List</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Add an item to the list
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div id="items" className="my-4">
                <h2>Your Items</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SNo</th>
                            <th scope="col">Item Title</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <th scope="row">1</th>
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