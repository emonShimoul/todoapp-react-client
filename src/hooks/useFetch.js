import { useState } from "react"

const useFetch = () => {
    const [todo, setTodo] = useState({});

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
                setTodo(data);
                if (data.insertedId) {
                    alert("Task added to List!!");
                    document.getElementById("todo-info").reset();
                }
            })
    }

    return {
        todo,
        saveTodoData
    }
}

export default useFetch;