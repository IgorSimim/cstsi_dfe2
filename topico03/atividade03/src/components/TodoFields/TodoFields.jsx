import { useState, useEffect, useRef } from "react";
import "./TodoFields.css";

function TodoFields({ newTodo, editedTodo, updateTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  
  const titleInputRef = useRef(null);

  useEffect(() => {
    if (editedTodo) {
      setTitle(editedTodo.title);
      setText(editedTodo.text);
      titleInputRef.current?.focus();
    } else {
      setTitle("");
      setText("");
    }
  }, [editedTodo]);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editedTodo) {
      updateTodo({ id: editedTodo.id, title, text });
    } else {
      newTodo({ title, text });
    }

    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="title" className="title">Título</label>
      <input
      ref={titleInputRef}
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="text" className="text">Texto</label>
      <textarea
        placeholder="Texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        {editedTodo ? "Atualizar Tarefa" : "+ Nova Tarefa"}
      </button>
    </form>
  );
}

export default TodoFields;
