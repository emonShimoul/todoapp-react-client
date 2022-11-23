import { useState } from "react"

const useFetch = () => {
    const [todo, setTodo] = useState({});

    const todoData = (todoInfo) => {
        fetch('http://localhost:5000/todoInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoInfo)
        })
            .then(res => res.json())
            .then(data => {
                setTodo(data);
            })
    }

    return {
        todo,
        todoData
    }
}

export default useFetch;