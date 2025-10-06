import { useEffect, useState } from "react";
import TodoFields from "./components/TodoFields/TodoFields";
import ListTodos from "./components/ListTodos/ListTodos";
import "./App.css";

function App() {
  const [listTodos, setListTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos && savedTodos.trim() !== "" && savedTodos !== "[]") {
      try {
        const parsedTodos = JSON.parse(savedTodos);

        if (Array.isArray(parsedTodos)) {
          setListTodos(parsedTodos);
        }
      } catch (error) {
        localStorage.removeItem("todos");
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(listTodos));
    }
  }, [listTodos, isLoaded]);

  const addTodo = ({ title, text }) => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      etapas: [],
      done: false,
    };
    setListTodos(prev => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setListTodos(prev => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEditedTodo(todo);
  };

  const updateTodo = ({ id, title, text }) => {
    setListTodos(prev => prev.map((t) =>
      t.id === id ? { ...t, title, text } : t
    ));
    setEditedTodo(null);
  };

  const addStep = (id, stepText) => {
    setListTodos(prev => prev.map((t) =>
      t.id === id
        ? {
          ...t,
          etapas: [
            ...t.etapas,
            { id: Date.now(), text: stepText, completed: false },
          ],
        }
        : t
    ));
  };

  const deleteStep = (todoId, stepId) => {
    setListTodos(prev => prev.map((t) =>
      t.id === todoId
        ? { ...t, etapas: t.etapas.filter((s) => s.id !== stepId) }
        : t
    ));
  };

  const toggleStep = (todoId, stepId) => {
    setListTodos(prev => prev.map((t) => {
      if (t.id === todoId) {
        const etapas = t.etapas.map((s) =>
          s.id === stepId ? { ...s, completed: !s.completed } : s
        );
        const allDone = etapas.every((s) => s.completed);
        return { ...t, etapas, done: allDone };
      }
      return t;
    }));
  };

  return (
    <div className="App">
      <h1>React ToDoList</h1>
      <h4>Crie e organize suas tarefas!!!</h4>

      <TodoFields
        newTodo={addTodo}
        editedTodo={editedTodo}
        updateTodo={updateTodo}
      />

      {listTodos.length > 0 && <h2 className="title">Lista de Tarefas</h2>}

      <ListTodos
        todosList={listTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        addStep={addStep}
        deleteStep={deleteStep}
        toggleStep={toggleStep}
      />
    </div>
  );
}

export default App;