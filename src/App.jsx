import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
