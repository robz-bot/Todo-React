import React from "react";
import "./App.css";
import Input from "./components/Input";
import ToDo from "./components/ToDo";
import { selectToDoList } from "./features/todoSlice";
import { useSelector } from "react-redux";

function App() {
  const toDoList = useSelector(selectToDoList);
  const toDoListDesc = [...toDoList].sort((a, b) => b.id - a.id);
  console.log(toDoListDesc);

  return (
    <>
    <h2 className="text-center my-2">Todo App</h2>
      <div className="container mx-auto">
        <Input />
        <div className="row">
          {toDoListDesc.map((item) => (
            <ToDo item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
