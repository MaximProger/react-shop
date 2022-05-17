import Products from "../pages/Products";
import Detail from "../pages/Detail";

export const routes = [
  { path: "/", component: <Products /> },
  { path: "/products/:id", component: <Detail /> },
];
