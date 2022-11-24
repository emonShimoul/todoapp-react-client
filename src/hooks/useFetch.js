import { useEffect, useState } from "react"

const useFetch = () => {
    const [todo, setTodo] = useState([]);

    // add data to the database
    const saveTodoData = (todoInfo) => {
        fetch('http://localhost:5000/todoInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    document.getElementById("todo-info").reset();
                }
            })
    }

    // delete data from the database
    const deleteTodoData = (_id) => {
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

    // change the task status in the database
    const changeStatus = (finalData) => {
        fetch(`http://localhost:5000/todoInfo`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalData)
        })
    }

    // load data from the database
    useEffect(() => {
        fetch('http://localhost:5000/todoInfo')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, []);

    return {
        todo,
        saveTodoData,
        deleteTodoData,
        changeStatus
    }
}

export default useFetch;