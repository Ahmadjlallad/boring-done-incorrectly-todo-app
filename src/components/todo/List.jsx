import React, { useContext, useEffect, useState } from "react";
import { settingContext } from "../../context/Settings";
import { Button, Card, Elevation } from "@blueprintjs/core";

function List({ list, toggleComplete, setIncomplete, incomplete }) {
  const settings = useContext(settingContext);
  const [pagination, setPagination] = useState(settings.state.numberOfItems);
  const renderList = (item) => {
    return (
      <Card
        interactive={true}
        elevation={Elevation.TWO}
        key={item.id}
        style={{
          width: "100%",
          maxHeight: "80%",
          minHeight: "40%",
          margin: "0.5rem",
        }}
        aria-label={`${item.text}`}
      >
        <div
          onClick={() => toggleComplete(item.id)}
          className={`${item.complete ? "Complete" : "notComplete"} isComplete`}
        >
          <span>{item.complete ? "Complete" : "pending"}</span>
        </div>
        <p className={"assignee"}>{item.assignee}</p>
        <p className={"task"}>{item.text}</p>
        <p className="Difficulty">
          <small>Difficulty: {item.difficulty}</small>
        </p>
      </Card>
    );
  };
  const makePagination = (list, number, filtered) => {
    const btn = [];
    let arr = [];
    if (filtered) arr = list.filter((item) => item.complete === false);
    else arr = list;
    for (let i = 0; i < arr.length / number; i++) {
      btn.push(
        <Button
          key={i}
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
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount.length);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  useEffect(() => {
    setPagination(settings.state.numberOfItems);
  }, [settings.state.numberOfItems]);

  return (
    <div>
      {settings.state.display
        ? list
            .sort(
              (a, b) =>
                a[settings.state.defaultSortField] -
                b[settings.state.defaultSortField]
            )
            .slice(pagination - settings.state.numberOfItems, pagination)
            .map((item) => renderList(item))
        : list
            .filter((item) => !item.complete)
            .sort(
              (a, b) =>
                a[settings.state.defaultSortField] -
                b[settings.state.defaultSortField]
            )
            .slice(pagination - settings.state.numberOfItems, pagination)
            .map((item) => renderList(item))}
      <div>
        {makePagination(
          list
            .filter((item) => !item.complete)
            .sort(
              (a, b) =>
                a[settings.state.defaultSortField] -
                b[settings.state.defaultSortField]
            ),
          settings.state.numberOfItems,
          settings.state.display
        )}
      </div>
    </div>
  );
}

export default List;
