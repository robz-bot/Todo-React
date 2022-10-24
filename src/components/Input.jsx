import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(saveTodo);

  const addTodo = (e) => {
    e.preventDefault();
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        task: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("")
  };
  return (
    <section className="container my-3">
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend ">
            <span className="input-group-text bg-primary text-dark">
              Task <i className="bi bi-list-task mx-2"></i>
            </span>
          </div>
          <input
            type="text"
            name="task"
            placeholder="New Task"
            value={input}
            className="form-control rounded"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-sm btn-info" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Input;
