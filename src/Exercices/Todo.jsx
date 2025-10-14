import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";
export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [showValidation, setShowValidation] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo.trim() === "") {
      setShowValidation(true);
      return;
    }

    const newItem = {
      id: nanoid(5),
      text: newTodo,
    };
    setTodoList([...todoList, newItem]);
    setNewTodo("");
    setShowValidation(false);
  }

  function deleteTooDo(id) {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  }

  return (
    <div
      className="card rgb-border "
    >
      <div className="flex flex-col gap-5 justify-center my-2 py-4">
        <h2 className="title">
          Todo-list
        </h2>

        <ul className="flex flex-col gap-2">
          {todoList.length === 0 && (
            <p className="text-gray-400">Aucune tâche pour le moment</p>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTooDo} />
            ))}
          <li></li>
        </ul>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between my-4 gap-4 ">
            <input
              className="bg-cyan-500/20 rounded-full p-2 text-center w-1/2"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Rajouter une tâche..."
            />
            {showValidation && (
              <span className="text-red-500 self-center">
                Veuillez entrer une tâche valide
              </span>
            )}
            <button className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_#00f7ff] p-2 rounded-full w-1/6 ">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
