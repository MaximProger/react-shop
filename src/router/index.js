import Products from "../pages/Products";
import Detail from "../pages/Detail";

export const routes = [
  { path: "/", component: <Products />, exact: true },
  { path: "/products/:id", component: <Detail />, exact: true },
];
