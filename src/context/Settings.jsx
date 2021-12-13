import React, { useEffect, useReducer } from "react";
export const settingContext = React.createContext();
const settings = {
  display: true,
  numberOfItems: 2,
  defaultSortField: "id",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "display":
      return { ...state, display: action.payload };
    case "numberOfItems":
      return { ...state, numberOfItems: action.payload };
    case "defaultSortField":
      return { ...state, defaultSortField: action.payload };
    default:
      return state;
  }
};
const Settings = (props) => {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    const { display, numberOfItems, defaultSortField } =
      JSON.parse(localStorage.getItem("settings")) || settings;
    dispatch({ type: "numberOfItems", payload: numberOfItems });
    dispatch({ type: "display", payload: display });
    dispatch({ type: "defaultSortField", payload: defaultSortField });
  }, []);
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(state));
  }, [state]);
  return (
    <settingContext.Provider value={{ state, dispatch }}>
      {props.children}
    </settingContext.Provider>
  );
};

export default Settings;
