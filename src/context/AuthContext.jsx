import React from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";
import { createContext } from "react";
import todoApi from "../api/todoApi";
export const authContext = createContext();
import { Base64 } from "js-base64";

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

  async function login(username, password) {
    console.log(username, password);
    try {
      const myToken = await todoApi.post(
        "/sign-in",
        {},
        {
          headers: {
            Authorization: `Basic ${Base64.encode(username + ":" + password)}`,
          },
        }
      );
      console.log(myToken.data);
      validateToken(myToken.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    setLoginState(false, null, {});
  }

  function validateToken(token) {
    try {
      console.log(token);
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log(user);
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log("Token Validation Error", e);
    }
  }
  async function sigIn(username, password, email, role) {
    console.log(username, password, email, role);
    try {
      const newUser = await todoApi.post("/sign-up", {
        username,
        password,
        email,
        role,
      });
      console.log(newUser);
      validateToken(newUser.data.token);
    } catch (error) {
      console.log(error);
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
