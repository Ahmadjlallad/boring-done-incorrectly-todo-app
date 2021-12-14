import React from "react";
import { When } from "react-if";
import { Button, Form } from "rsuite";
import { authContext } from "../../context/AuthContext";

const Login = ({ createNewUser }) => {
  const context = React.useContext(authContext);
  const [state, setState] = React.useState({ username: "", password: "" });

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e });
  };

  const handleSubmit = (e) => {
    context.login(state.username, state.password);
  };
  return (
    <>
      <When condition={context.loggedIn}>
        <Button onClick={context.logout}>Log Out</Button>
      </When>

      <When condition={!context.loggedIn}>
        <Form layout="inline" onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control
              style={{ width: 160 }}
              placeholder="UserName"
              name="username"
              onChange={(e) => handleChange(e, "username")}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control
              name="password"
              autoComplete="off"
              style={{ width: 160 }}
              placeholder="password"
              type={context.loggedIn ? "text" : "password"}
              onChange={(e) => handleChange(e, "password")}
            />
          </Form.Group>

          <Button type="submit">Login</Button>
          <Button onClick={() => createNewUser(false)}>Sign in</Button>
        </Form>
      </When>
    </>
  );
};

export default Login;
