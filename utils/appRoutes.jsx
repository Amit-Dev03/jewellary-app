import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import ErrorPage from "../src/components/ErrorPage";
import About from "../src/components/About";
import Body from "../src/components/body/Body";
import NecklaceData from "../src/components/NecklaceData";
export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/necklace",
        element: <Body />,
      },
      {
        path: "/necklace/:id",
        element: <NecklaceData />,
      },
    ],
  },
]);
