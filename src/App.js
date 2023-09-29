import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskLists from "./pages/TaskLists";
import Tasks from "./pages/Tasks";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskLists />} />
          <Route path="/task/:id" element={<Tasks />} />
          <Route path="/task/:id/edit" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
