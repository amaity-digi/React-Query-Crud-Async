import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskLists from "./pages/TaskLists";
import Task from "./pages/Task";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TaskLists />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/task/:id/edit" element={<EditTask />} />
        </Routes>
    </div>
  );
}

export default App;
