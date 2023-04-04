import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const today = props.list.filter((task) => {
    const taskDate = new Date(task.dueDate);
    const todayDate = new Date();
    return (
      taskDate.getDate() === todayDate.getDate() &&
      taskDate.getMonth() === todayDate.getMonth() &&
      taskDate.getFullYear() === todayDate.getFullYear()
    );
  });

  return (
    <div id="today-list">
      <h2>Today</h2>
      <ListRender list={today} />
    </div>
  );
};

export default Today;
