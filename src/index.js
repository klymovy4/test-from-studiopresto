import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import CartComponent from "./Components/CartComponent/CartComponent";
import OrderComponent from "./Components/OrderComponent/OrderComponent";
import { Toolbar } from "@mui/material";
import "./index.css";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

function Layout() {
  return (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "item/:id",
        element: <ProductDetails />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cart",
        element: <CartComponent />,
        children: [],
      },
      {
        path: "order",
        element: <OrderComponent />,
      },
      {
        path: 'success',
        element: <SuccessPage />
      },
      {
        path: '*',
        element: <App />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
