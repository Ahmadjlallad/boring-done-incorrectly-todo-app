import React from "react";
import { When } from "react-if";
import { Button, ButtonToolbar, Form, Panel } from "rsuite";
import { authContext } from "../../context/AuthContext";
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const SigIn = ({ createNewUser }) => {
  const context = React.useContext(authContext);
  const [state, setState] = React.useState({ username: "", password: "" });

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e });
  };

  const handleSubmit = (e) => {
    context.sigIn(state.username, state.password);
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
              <Form.HelpText>Username is required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                onChange={(e) => handleChange(e, "password")}
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
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
