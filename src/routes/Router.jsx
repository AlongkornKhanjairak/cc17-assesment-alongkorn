import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import TodoLogin from "../TodoPages/TodoLogin";
import TodoItem from "../TodoPages/TodoItem";

const router = createBrowserRouter([
  { path: "/login", element: <TodoLogin /> },
  {
    path: "/",
    element: (
      <h1>
        <Outlet />
      </h1>
    ),
    children: [
      { path: "", element: <TodoLogin /> },
      { path: "profile", element: <TodoItem /> },
    ],
  },
  //   { path: "*", element: <NotFoundPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
