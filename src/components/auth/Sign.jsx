import React from "react";
import { When } from "react-if";
import { Button, ButtonToolbar, Form, Panel, SelectPicker } from "rsuite";
import { authContext } from "../../context/AuthContext";
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const data = [
  {
    label: "admin",
    value: "admin",
    role: "admin",
  },
  {
    label: "writer",
    value: "writer",
    role: "writer",
  },
  {
    label: "editor",
    value: "editor",
    role: "editor",
  },
  {
    label: "user",
    value: "user",
    role: "user",
  },
];

const SigIn = ({ createNewUser }) => {
  const context = React.useContext(authContext);
  const [state, setState] = React.useState({
    username: "",
    password: "",
    email: "",
    role: "user",
  });

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e });
  };

  const handleSubmit = (e) => {
    context.sigIn(state.username, state.password, state.email, state.role);
  };
  return (
    <>
      <When condition={!context.loggedIn}>
        <Panel style={{ ...styles }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control
                name="username"
                onChange={(e) => handleChange(e, "username")}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.ControlLabel style={{ color: "#000" }}>
                email
              </Form.ControlLabel>
              <Form.Control
                name="email"
                onChange={(e) => handleChange(e, "email")}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="filter">
              <Form.ControlLabel style={{ color: "#000" }}>
                Role{" "}
              </Form.ControlLabel>
              <SelectPicker
                placement="leftStart"
                data={data}
                style={{ width: 224 }}
                name="filter"
                onChange={(e) => handleChange(e, "role")}
                value={state.role}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel style={{ color: "#000" }}>
                Password
              </Form.ControlLabel>
              <Form.Control
                name="password"
                onChange={(e) => handleChange(e, "password")}
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary" type="submit">
                  Submit
                </Button>
                <Button
                  appearance="default"
                  onClick={() => createNewUser(true)}
                >
                  Cancel
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
      </When>
    </>
  );
};

export default SigIn;
