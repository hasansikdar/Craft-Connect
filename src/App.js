import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";

function App() {
  return (
    <div className="dark:bg-[#2C2048] bg-white">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
