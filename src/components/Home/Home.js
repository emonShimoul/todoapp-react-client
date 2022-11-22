import React from 'react';

const Home = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center">TODOs List</h2>
            <div className="form-group text-start">
                <label for="title">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">Add an item to the list</small>
            </div>
            <div className="form-group text-start">
                <label for="description">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
            </div>
            <div className='mt-4'>
                <button id="add" className="btn btn-success me-4">Add to list</button>
                <button id="clear" className="btn btn-danger" onclick="clearStorage()">Clear list</button>
            </div>

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