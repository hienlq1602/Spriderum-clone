import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ErrorPage from "./pages/noPage/noPage";
import Login from "./pages/login/login";
import LoginUser from "./pages/loginUser/loginUser";
import Admin from "./pages/admin/admin";
import PostList from "./pages/admin/components/postList/postList";
import Statistic from "./pages/admin/components/statistic/statistic";
import AddNew from "./pages/admin/components/addNew/addNew";
import EditPost from "./pages/admin/components/editPost/editPost";
import DetailPost from "./pages/detail/detailPost";
import Detail from "./pages/detail/detail";
import LoginHome from "./pages/login/loginHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "detail",
    element: <Detail />,
  },
  {
    path: "detail/:id",
    element: <DetailPost />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "loginHome",
    element: <LoginHome />,
  },
  {
    path: "register",
    element: <LoginUser />,
  },
  
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "addnew",
        element: <AddNew />,
      },
      {
        path: "editpost",
        element: <EditPost />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
