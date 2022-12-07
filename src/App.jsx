import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <div className="wrap">
      <TodoHeader />
      <TodoBoard />
    </div>
  );
}

export default App;
