import "./index.scss";
// import Checkbox from "./Checkbox";
// import { useState } from "react";

const Task = ({ task }) => {
  return (
    <div className="task-name">
      <span>{task}</span>
    </div>
  );
};

// const Task = ({ name, done, onToggle, onTrash, onRename }) => {
//   const [editMode, setEditMode] = useState(false);
//   return (
//     <div className={`task ${done ? "done" : ""}`}>
//       <Checkbox checked={done} onClick={() => onToggle(!done)} />

//       {!editMode && (
//         <div className="task-name" onClick={() => setEditMode((prev) => !prev)}>
//           <span>{name}</span>
//         </div>
//       )}

//       {editMode && (
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             setEditMode(false);
//           }}
//         >
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => onRename(event.target.value)}
//           />
//         </form>
//       )}

//       <button onClick={onTrash} className="trash">
//         Delete
//       </button>
//     </div>
//   );
// };

export default Task;
