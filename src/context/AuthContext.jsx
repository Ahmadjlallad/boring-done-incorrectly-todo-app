import React from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import { createContext } from "react";

export const authContext = createContext();

const testUsers = {
  admin: {
    password: "password",
    name: "Administrator",
    role: "admin",
    capabilities: ["create", "read", "update", "delete"],
  },
  editor: {
    password: "password",
    name: "Editor",
    role: "editor",
    capabilities: ["read", "update"],
  },
  writer: {
    password: "password",
    name: "Writer",
    role: "writer",
    capabilities: ["create", "read"],
  },
};

const AuthComponents = (props) => {
  const [state, setState] = React.useState({
    loggedIn: false,
    can,
    login,
    logout,
    sigIn,
    user: { capabilities: [] },
  });
  function can(user, capability) {
    return user?.capabilities?.includes(capability);
  }

  function login(username, password) {
    if (testUsers[username]) {
      // Create a "good" token, like you'd get from a server
      const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      validateToken(token);
    }
  }

  function logout() {
    setLoginState(false, null, {});
  }

  function validateToken(token) {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log("Token Validation Error", e);
    }
  }
  function sigIn(username, password) {
    if (testUsers[username] && testUsers[username].password === password) {
      // Create a "good" token, like you'd get from a server
      // call api  await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
      // setLoginState(true, token, user);
    }
  }

  function setLoginState(loggedIn, token, user) {
    cookie.save("auth", token);
    setState({ ...state, token, loggedIn, user });
  }

  React.useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <authContext.Provider value={state}>{props.children}</authContext.Provider>
  );
};

export default AuthComponents;
