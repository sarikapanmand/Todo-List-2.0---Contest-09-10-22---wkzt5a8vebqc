import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const today = new Date();
  const next7days = props.list.filter((task) => {
    const taskDate = new Date(task.dueDate);
    const timeDiff = taskDate.getTime() - today.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    return daysDiff >= 0 && daysDiff <= 7;
  });

  return (
    <div id="next-list">
      <h2>Next 7 Days</h2>
      <ListRender list={next7days} />
    </div>
  );
};

export default Next7Days;
