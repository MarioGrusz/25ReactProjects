import React, { useState } from "react";

const NotesApp = () => {
  const [id, setId] = useState(3);
  const [todos, setTodos] = useState([
    { id: 0, name: "Eat" },
    { id: 1, name: "Sleep" },
    { id: 2, name: "Play Video Games" },
  ]);

  const [todoName, setTodoName] = useState("");
  const [todoEditItem, setTodoEditItem] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: id, name: todoName }]);
    setId(id + 1);
    setTodoName("");
  };

  const onDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onEdit = (todo) => {
    const newTodo = todo ? { ...todo } : todo;
    setTodoEditItem(newTodo);
  };

  const onDoneEdit = () => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoEditItem?.id) {
          return todoEditItem;
        }
        return todo;
      });
    });
    setTodoEditItem(null);
  };

  const onTodoEditItemNameChange = (e) => {
    const newName = e.target.value;
    setTodoEditItem({ ...todoEditItem, name: newName });
  };

  return (
    <div>
      <ul>
        {todos && todos.length
          ? todos.map((todo) => {
              const isEditing = todoEditItem?.id === todo.id;
              return (
                <li key={todo.id}>
                  {!isEditing && <> {todo.name}</>}
                  {isEditing && (
                    <input
                      value={todoEditItem.name}
                      onChange={onTodoEditItemNameChange}
                    />
                  )}

                  {!isEditing && (
                    <button onClick={() => onEdit(todo)}>Edit</button>
                  )}

                  {isEditing && (
                    <button onClick={() => onDoneEdit()}>Done</button>
                  )}

                  <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
              );
            })
          : null}
      </ul>

      <form onSubmit={addTodo}>
        <input
          placeholder="Todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </form>
    </div>
  );
};

export default NotesApp;
