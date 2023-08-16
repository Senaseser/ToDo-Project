import React from "react";
import { useState } from "react";
import "../App.css";

function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  function detectChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  }
  function submitTask(event) {
    event.preventDefault();
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
  }
  return (
    <div className="formDiv">
      <form className="mt-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={detectChange}
          placeholder="Başlık"
          className="form-control formItem mb-3"
        />
        <textarea
          name="content"
          value={task.content}
          onChange={detectChange}
          className="form-control formItem mb-3 "
          placeholder="İşinizi giriniz"
          rows={3}
        ></textarea>
        <button className="btn btn-primary" onClick={submitTask}>
          Ekle
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
