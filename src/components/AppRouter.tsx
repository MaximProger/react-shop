import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router/index";

function AppRouter(): JSX.Element {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.component} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
