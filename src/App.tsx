import Home from "./screens/Home";
import StylesProvider from "./providers";
import { ToDoProvider } from "./contexts/toDoContext";

function App() {
  return (
    <ToDoProvider>
      <StylesProvider>
        <Home />
      </StylesProvider>
    </ToDoProvider>
  );
}

export default App;
