import React from "react";
export const settingContext = React.createContext();
const settings = {
  display: true,
  numberOfItems: 2,
  defaultSortField: "id",
};
const Settings = (props) => {
  return (
    <settingContext.Provider value={settings}>
      {props.children}
    </settingContext.Provider>
  );
};

export default Settings;
