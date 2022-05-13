import {Navigate, Route, Routes} from 'react-router-dom'
import { routes } from '../router';

function AppRouter() {
  return ( 
    <Routes>
      {routes.map(route => 
          <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
      />
        )}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
   );
}

export default AppRouter;