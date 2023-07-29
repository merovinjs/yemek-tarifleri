import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import Details from "./pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tarifler", element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/search", element: <Search /> },
      { path: "/getDetail/:id", element: <Details /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
