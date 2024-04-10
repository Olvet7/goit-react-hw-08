import "./App.css";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import AppRoutes from "./AppRoutes";
import { lazy, useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
import RestrictedRoutes from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshingUser = useSelector(selectIsRefreshing);

  return (
    <Layout>
      {isRefreshingUser ? (
        <h5>Refreshing user... Please wait</h5>
      ) : (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="register"
              element={<RestrictedRoutes component={<RegisterPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoutes component={<LoginPage />} />}
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
              }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Layout>
  );
}
