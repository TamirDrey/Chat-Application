import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";

export interface RouteItem {
  path: string;
  element: React.ComponentType;
}

export const PublicRoutes: RouteItem[] = [
  { path: "/register", element: Register },
  { path: "/login", element: Login },
  { path: "/", element: Chat },
];

//export const UserRoutes: RouteItem[] = [{ path: "/", element: Chat }];
