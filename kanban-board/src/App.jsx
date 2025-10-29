import React, { useState, useEffect, createContext, useContext } from "react";
import Column from "./components/Column.jsx";
import "./App.css";

export const BoardContext = createContext();

const TaskBoardProvider = function () {
  const [tasks, setTasks] = useState([
    { id: 1, title: "install python", status: "todo" },
    { id: 2, title: "install node", status: "todo" },
    { id: 3, title: "install cursor IDE", status: "todo" }
  ]);

  const moveTask = function (taskId, newStatus) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const doneTasks = document.querySelectorAll('.task[data-status="done"]');
    doneTasks.forEach(item => {
      item.style.backgroundColor = "#dbf3c9";
    });
  }, [tasks]);

  return (
    <BoardContext.Provider value={{ tasks, moveTask }}>
      <Board />
    </BoardContext.Provider>
  );
};

const Board = function () {
  const { tasks } = useContext(BoardContext);

  return (
    <div className="board">
      <Column
        title="To Do 🪄"
        tasks={tasks.filter(task => task.status === "todo")}
      />
      <Column
        title="In Progress 🚀"
        tasks={tasks.filter(task => task.status === "inProgress")}
      />
      <Column
        title="Done 🌟"
        tasks={tasks.filter(task => task.status === "done")}
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <TaskBoardProvider />
    </div>
  );
}
