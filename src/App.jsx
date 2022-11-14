import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FourOhFour, Home, Play } from "./pages";
import { Profile } from "./pages/Profile";

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
  {
    path:'/profile',
    element: <Profile></Profile>
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
