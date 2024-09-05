import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import AddNote from "./components/addNote/AddNote.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Home from "./components/HomePage/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element : <AboutUs />
      },
      {
        path: "addNotes",
        element: <AddNote />,
      },
      {
        path : "addNotes/:id",
        element : <AddNote />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
