import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const style_done = {
    fontSize: 14,
    color: "#92425f",
    letterSpacing: 1,
  };

  return (
    <>
      <div className="active">
        <h2>Your tasks to do</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p style={style_done}>Your to do list is empty</p>
        )}
      </div>
      <div className="done">
        <h3>Tasks done</h3>
        {done.length > 5 && (
          <span style={style_done}>Only 5 tasks are shown here</span>
        )}
        {done.length === 0 && <span style={style_done}>Nothing done</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
