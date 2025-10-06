import { useState, useRef } from "react";
import "./ListTodos.css";

function ListTodos({
  todosList,
  deleteTodo,
  editTodo,
  addStep,
  deleteStep,
  toggleStep,
}) {
  const [showDetails, setShowDetails] = useState({});
  const [showSteps, setShowSteps] = useState({});
  const [newStep, setNewStep] = useState({});

  const stepInputRefs = useRef({});

  const handleAddStep = (todoId) => {
    if (!newStep[todoId]?.trim()) return;
    addStep(todoId, newStep[todoId]);
    setNewStep({ ...newStep, [todoId]: "" });

    stepInputRefs.current[todoId]?.focus();
  };

  const setStepInputRef = (todoId, element) => {
    if (element) {
      stepInputRefs.current[todoId] = element;
    }
  };


  return (
    <div className="todo-list">
      {todosList.map((todo, index) => (
        <div
          key={todo.id}
          className={`todo-card ${todo.done ? "done" : ""}`}
        >
          <h4>
            {index + 1}° - {todo.title}
          </h4>

          <div className="icons">
            <span className="icon-delete" onClick={() => deleteTodo(todo.id)}>❌</span>
            <span className="icon-edit" onClick={() => editTodo(todo)}>📝</span>
            <span className="icon-step"
              onClick={() => {
                setShowDetails({ ...showDetails, [todo.id]: true });
                setShowSteps({ ...showSteps, [todo.id]: true });
              }}
            >
              🧭
            </span>
          </div>

          <p
            className="descricao-toggle"
            onClick={() =>
              setShowDetails({
                ...showDetails,
                [todo.id]: !showDetails[todo.id],
              })
            }
            style={{ cursor: "pointer" }}
          >
            {showDetails[todo.id] ? "▼" : "▶"} <b>Descrição</b>
          </p>

          {showDetails[todo.id] && (
            <>
              <p>{todo.text}</p>
              <p
                className="etapas-toggle"
                onClick={() =>
                  setShowSteps({
                    ...showSteps,
                    [todo.id]: !showSteps[todo.id],
                  })
                }
                style={{ cursor: "pointer", marginTop: "10px" }}
              >
                {showSteps[todo.id] ? "▼" : "▶"} <b>Etapas</b> |{" "}
                {todo.etapas.length} Etapa
                {todo.etapas.length !== 1 ? "s" : ""}
              </p>

              {showSteps[todo.id] && (
                <>
                  <ol>
                    {todo.etapas.map((s) => (
                      <li key={s.id}>
                        <span
                          className={s.completed ? "step-done" : ""}
                          onClick={() => toggleStep(todo.id, s.id)}
                        >
                          {s.text}
                        </span>
                        <span className="icon-teste" onClick={() => deleteStep(todo.id, s.id)}> ❌</span>
                      </li>
                    ))}
                  </ol>

                  <div className="add-step">
                    <input
                      ref={(el) => setStepInputRef(todo.id, el)}
                      type="text"
                      placeholder="Nova etapa..."
                      value={newStep[todo.id] || ""}
                      onChange={(e) =>
                        setNewStep({ ...newStep, [todo.id]: e.target.value })
                      }
                    />
                    <button onClick={() => handleAddStep(todo.id)}>+ Etapa</button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListTodos;