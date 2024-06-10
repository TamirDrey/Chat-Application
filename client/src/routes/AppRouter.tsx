import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PublicRoutes } from "./RouteData";
import Chat from "../pages/Chat";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {PublicRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="/*" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
