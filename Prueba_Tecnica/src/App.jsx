import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import { Suspense } from "react";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={ROUTES.productTable.es_MX} />}
            />
            <Route
              path={ROUTES.productTable.es_MX}
              element={<ROUTES.productTable.element />}
            />
            <Route
              path={ROUTES.addProduct.es_MX}
              element={<ROUTES.addProduct.element />}
            />
            <Route
              path={ROUTES.editProduct.es_MX}
              element={<ROUTES.editProduct.element />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
