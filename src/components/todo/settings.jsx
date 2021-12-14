import React, { useContext } from "react";
import {
  FlexboxGrid,
  Form,
  List,
  Panel,
  SelectPicker,
  Slider,
  Toggle,
} from "rsuite";
import { settingContext, settings } from "../../context/Settings";
import "rsuite/dist/rsuite.min.css";
const data = [
  {
    label: "assigned",
    value: "assigned",
    role: "assigned",
  },
  {
    label: "id",
    value: "id",
    role: "id",
  },
  {
    label: "difficulty",
    value: "difficulty",
    role: "difficulty",
  },
];

function Settings() {
  const { state, dispatch } = useContext(settingContext);
  return (
    <div>
      <FlexboxGrid justify="space-around" align="middle">
        <FlexboxGrid.Item colspan={9}>
          <Form
            fluid
            style={{ marginTop: "10px" }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group controlId="filter">
              <Form.ControlLabel>Filter by: </Form.ControlLabel>
              <SelectPicker
                data={data}
                style={{ width: 224 }}
                name="filter"
                onChange={(e) => {
                  dispatch({ type: "defaultSortField", payload: e });
                }}
                value={state.defaultSortField || settings.defaultSortField}
              />
            </Form.Group>
            <Form.Group controlId="display">
              <Form.ControlLabel>display complete To Do: </Form.ControlLabel>
              <Toggle
                onChange={(e) => {
                  dispatch({ type: "display", payload: e });
                }}
                name={"display"}
                checked={state.display}
                value={state.display || settings.display}
              />
            </Form.Group>
            <Form.Group controlId="slider">
              <Form.ControlLabel>show Item: </Form.ControlLabel>
              <Slider
                data-testid="slider"
                min={1}
                step={1}
                max={10}
                graduated
                progress
                renderMark={(mark) => {
                  return mark;
                }}
                value={state.numberOfItems || settings.numberOfItems}
                onChange={(e) => {
                  dispatch({ type: "numberOfItems", payload: e });
                }}
                name="slider"
              />
            </Form.Group>
          </Form>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={6}>
          <Panel header="your settings" bordered>
            <List size="sm">
              <List.Item key={3} index={3}>
                sort by: {state.defaultSortField}
              </List.Item>
              <List.Item key={1} index={1}>
                display complete To Do: {state.display ? "✔️" : "❌"}
              </List.Item>
              <List.Item key={2} index={2}>
                number of Todo's in the same label: {state.numberOfItems}
              </List.Item>
            </List>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default Settings;
