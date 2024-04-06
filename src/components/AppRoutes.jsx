// всі лезі сторінки
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
