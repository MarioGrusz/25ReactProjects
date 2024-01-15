import "./index.scss";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks?.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  const addTask = (name) => {
    console.log("name", name);
    setTasks((prev) => {
      if (prev !== null) {
        return [...prev, { name: name, done: false }];
      } else {
        return [{ name: name, done: false }];
      }
    });
  };

  //   const removeTask = (indexToRemove) => {
  //     setTasks((prev) => {
  //       return prev.filter((taskObject, index) => index !== indexToRemove);
  //     });
  //   };

  const removeTask = (indexToRemove) => {
    setTasks((prev) => {
      const newTasks = prev.filter(
        (taskObject, index) => index !== indexToRemove
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const updateTaskDone = (taskIndex, newDone) => {
    setTasks((prev) =>
      prev.map((task, index) => {
        if (index !== taskIndex) return task;
        return { ...task, done: newDone };
      })
    );
  };

  const getMessage = () => {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "try to do at least one 😅";
    }
    if (percentage === 100) {
      return "Nice job!🌴";
    }
    return "Keep it going 💪";
  };

  const numberComplete = tasks?.filter((task) => task.done).length;
  const numberTotal = tasks?.length;

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} Complete
        <span>{getMessage()}</span>
      </h1>
      <TaskForm addTask={addTask} />
      {tasks?.map((task, index) => {
        return (
          <Task
            key={index}
            {...task}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        );
      })}
    </main>
  );
};

export default TodoList;
