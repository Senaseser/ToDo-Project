import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import { useState } from "react";
import Task from "./components/Task";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.title}
                content={taskItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
