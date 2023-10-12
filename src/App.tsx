import Home from "./screens/Home";
import StylesProvider from "./providers";

function App() {
  return (
    <StylesProvider>
      <Home />
    </StylesProvider>
  );
}

export default App;
