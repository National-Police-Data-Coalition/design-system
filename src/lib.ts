import Button from "./components/Button/Button.tsx";
import TextInput from "./components/TextInput/TextInput.tsx";

function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}

export { Button, TextInput, helloAnything };
