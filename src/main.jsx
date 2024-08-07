import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNote from "./components/addNote/AddNote.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path : "/",
        element : <div>HomePage with all available lists</div>
      },
      {
        path : '/addNotes',
        element : <AddNote />
      },
      {
        path : '/aboutus/',
        element : <div>About Us </div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
