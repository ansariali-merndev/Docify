import { RootLayout } from "./layout/app";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { GoogleWrapper } from "./components/GoogleWrapper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./lib/context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/googleSign",
          element: <GoogleWrapper />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router}> </RouterProvider>
    </UserProvider>
  );
}

export default App;
