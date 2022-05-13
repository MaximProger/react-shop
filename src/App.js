import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
