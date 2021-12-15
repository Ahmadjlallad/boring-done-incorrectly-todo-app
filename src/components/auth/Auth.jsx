import React from "react";
import { When } from "react-if";

import { authContext } from "../../context/AuthContext.jsx";

const Auth = (props) => {
  const context = React.useContext(authContext);
  const isLoggedIn = context.loggedIn;
  const canDo = props.capability
    ? context.can(context.user, props.capability)
    : true;
  console.log(context);
  const okToRender = isLoggedIn && canDo;
  return <When condition={okToRender}>{props.children}</When>;
};

export default Auth;
