import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Router/Router';

function App() {
  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  );
}

export default App;
