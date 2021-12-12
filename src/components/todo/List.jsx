import React, { useContext, useEffect, useState } from "react";
import { settingContext } from "../../context/Settings";
import { Button, Card, Elevation } from "@blueprintjs/core";

function List({ list, toggleComplete, setIncomplete, incomplete }) {
  const settings = useContext(settingContext);
  const [pagination, setPagination] = useState(settings.numberOfItems);
  const makePagination = (list, number) => {
    const btn = [];
    for (let i = 0; i < list.length / number; i++) {
      btn.push(
        <Button
          onClick={() => {
            setPagination((i + 1) * number);
          }}
        >
          {i + 1}
        </Button>
      );
    }
    return btn;
  };
  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);
  console.log(list);
  return (
    <div>
      {list
        .slice(pagination - settings.numberOfItems, pagination)
        .map((item) => (
          <Card interactive={true} elevation={Elevation.TWO} key={item.id}>
            <div
              onClick={() => toggleComplete(item.id)}
              className={`${
                item.complete ? "Complete" : "notComplete"
              } isComplete`}
            >
              <span>{item.complete ? "Complete" : "pending"}</span>
            </div>
            <p className={"assignee"}>{item.assignee}</p>
            <p className={"task"}>{item.text}</p>
            <p className="Difficulty">
              <small>Difficulty: {item.difficulty}</small>
            </p>
          </Card>
        ))}
      <div>{makePagination(list, settings.numberOfItems)}</div>
    </div>
  );
}

export default List;
// * list = 100 items
// * pag = 10 items
// * current page = 1 = 10 items
// * slice(0, 10)
