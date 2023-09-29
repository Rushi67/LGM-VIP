import { useState } from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"
function TodoList() {
    const [todos, setTodos] = useState([])
    //add todo to list
    const addTask = (nextTask) => {
        if (!nextTask.text)
            return
        const newTodo = [...todos, nextTask]
        setTodos(newTodo)
    }

    //remove todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }


    //task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }
    return (
        <div>
            <TodoForm addTask={addTask}>
            </TodoForm>
            <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} >
            </Todo>
        </div>
    )
}
export default TodoList