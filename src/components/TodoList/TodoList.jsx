import './index.scss';
import TaskForm from './TaskForm';
import Task from './Task';
import { useEffect, useState } from 'react';

const TodoList = () => {


    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if(tasks.length === 0) return
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(tasks)
    }, [])


    const addTask = (name) => {
        console.log('name', name)
        setTasks(prev => [...prev, { name: name, done: false }]);
    };


    return (
        <main>
            <TaskForm addTask={addTask} />
            {tasks.map((task, index) => {
                return <Task key={index} {...task} />
            })}
            <Task />
        </main>
    )
}

export default TodoList