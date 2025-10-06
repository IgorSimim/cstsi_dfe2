import React, { useState } from "react";
import "./Todo.css";

export default function Todo({ todo, index, removeTodo, updateTodo }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showNewStep, setShowNewStep] = useState(false);
  const [newStepText, setNewStepText] = useState("");

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleNewStep = () => setShowNewStep(!showNewStep);

  const addStep = () => {
    if (newStepText.trim() === "") return;
    const updatedSteps = [...(todo.steps || []), { text: newStepText, done: false }];
    updateTodo(index, { ...todo, steps: updatedSteps });
    setNewStepText("");
    setShowNewStep(false);
  };

  const toggleStepDone = (stepIndex) => {
    const updatedSteps = todo.steps.map((s, i) =>
      i === stepIndex ? { ...s, done: !s.done } : s
    );
    updateTodo(index, { ...todo, steps: updatedSteps });
  };

  const removeStep = (stepIndex) => {
    const updatedSteps = todo.steps.filter((_, i) => i !== stepIndex);
    updateTodo(index, { ...todo, steps: updatedSteps });
  };

  const allStepsDone = todo.steps?.length > 0 && todo.steps.every((s) => s.done);

  return (
    <div className={`todo-card ${allStepsDone ? "done" : ""}`}>
      <h3>{index + 1}° - {todo.title}</h3>

      <div className="todo-actions">
        <button onClick={() => removeTodo(index)}>❌</button>
        <button>📝</button>
        <button onClick={toggleNewStep}>🧭</button>
      </div>

      <div className="description-header" onClick={toggleDescription}>
        <span>{showDescription ? "▼" : "▶"} Descrição</span>
        {todo.steps && todo.steps.length > 0 && (
          <span> | {todo.steps.length} Etapa{todo.steps.length > 1 ? "s" : ""}</span>
        )}
      </div>

      {showNewStep && (
        <div className="new-step-box">
          <h4>Nova Etapa</h4>
          <input
            type="text"
            value={newStepText}
            onChange={(e) => setNewStepText(e.target.value)}
            placeholder="Descreva a nova etapa!"
          />
          <div className="step-buttons">
            <button onClick={addStep}>✔️</button>
            <button onClick={toggleNewStep}>x</button>
          </div>
        </div>
      )}

      {showDescription && (
        <div className="description-body">
          <p>{todo.text}</p>
          {todo.steps && todo.steps.length > 0 && (
            <>
              <strong>Etapas:</strong>
              <ol>
                {todo.steps.map((step, i) => (
                  <li key={i} className={step.done ? "step-done" : ""}>
                    <span>{step.text}</span>
                    <button onClick={() => toggleStepDone(i)}>✔️</button>
                    <button onClick={() => removeStep(i)}>❌</button>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      )}
    </div>
  );
}
