import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./store";
function App() {
  return (
    <div className="App">
      <Store>
        <Home></Home>
      </Store>
    </div>
  );
}

export default App;
