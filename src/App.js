import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="dark:bg-black">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
