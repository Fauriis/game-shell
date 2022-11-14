import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FourOhFour, Home, Play } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <FourOhFour></FourOhFour>,
  },
  {
    path: "/play",
    element: <Play></Play>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
