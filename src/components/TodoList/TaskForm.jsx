import { useState } from 'react';
import './index.scss';

const TaskForm = ({ addTask }) => {

    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName) {
            addTask(taskName);
            setTaskName(''); // Clear the input field
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input 
                type='text'
                placeholder='Your next task...'
                value={taskName}
                onChange={ (e) => setTaskName(e.target.value)}
            />
        </form>
    )
}

export default TaskForm