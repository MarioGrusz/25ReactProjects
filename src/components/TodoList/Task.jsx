import "./index.scss";
import Checkbox from "./Checkbox";
import { useState } from "react";

const Task = ({ name, done, onToggle, onTrash }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={`task ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />

      {!editMode && (
        <div className="task-name" onClick={() => setEditMode((prev) => !prev)}>
          <span>{name}</span>
        </div>
      )}

      {editMode && (
        <form>
          <input type="text" value={name} />
        </form>
      )}

      <button onClick={onTrash} className="trash">
        Delete
      </button>
    </div>
  );
};

export default Task;
