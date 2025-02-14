import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
