import { Button, TextInput } from "./components";
import "./App.css";
import "./variables.css";

function App() {
  return (
    <>
      <h3>Text Input</h3>
      <TextInput label="Input label" />

      <h3>Text Input &mdash; Password</h3>
      <TextInput label="Input label" type="password" />

      <h3>Text Input</h3>
      <TextInput label="Input label" helpText="help text here" />

      <h3>Text Input &mdash; Full</h3>
      <TextInput label="Input label" isFull={true} />

      <h3>Button &mdash; Primary</h3>
      <Button onClick={() => console.log("clicked")}>Test</Button>
      &nbsp;
      <Button size="medium" onClick={() => console.log("clicked")}>
        Test
      </Button>
      &nbsp;
      <Button size="small" onClick={() => console.log("clicked")}>
        Test
      </Button>

      <h3>Button &mdash; Secondary</h3>
      <Button variant="secondary" onClick={() => console.log("clicked")}>
        Test
      </Button>

      <h3>Button &mdash; Disabled</h3>
      <Button isDisabled={true} onClick={() => console.log("clicked")}>
        Test
      </Button>

      <h3>Button &mdash; Link</h3>
      <Button variant="link" onClick={() => console.log("clicked")}>
        Test
      </Button>

      <h3>Button &mdash; Full</h3>
      <Button isFull={true} onClick={() => console.log("clicked")}>
        Test
      </Button>
    </>
  );
}

export default App;
