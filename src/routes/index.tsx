import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Create } from "../pages/Create";
 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Create /> },
    ],
  },
]);
