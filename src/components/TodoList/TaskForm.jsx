import { useState } from "react";
import "./index.scss";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("taskName", taskName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </form>
  );
};

// const TaskForm = ({ addTask }) => {

//     const [taskName, setTaskName] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (taskName) {
//             addTask(taskName);
//             setTaskName(''); // Clear the input field
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <button>+</button>
//             <input
//                 type='text'
//                 placeholder='Your next task...'
//                 value={taskName}
//                 onChange={ (e) => setTaskName(e.target.value)}
//             />
//         </form>
//     )
// }

export default TaskForm;
