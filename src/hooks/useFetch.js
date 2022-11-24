import { useEffect, useState } from "react"

const useFetch = () => {
    const [todo, setTodo] = useState([]);

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

    useEffect(() => {
        fetch('http://localhost:5000/todoInfo')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, []);

    return {
        todo,
        saveTodoData,
        deleteTodoData
    }
}

export default useFetch;