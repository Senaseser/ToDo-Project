import React from "react";
import "../App.css";

function Task(props) {
  const deleteClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className=" task col-md-4 mb-4">
      <div className="taskItem ">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn btn-danger" onClick={deleteClick}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default Task;
