// всі лезі сторінки
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {useSelector} from "react-redux";
import Layout from "./Layout/Layout";
import { selectIsRefreshing } from "../redux/auth/selectors";
import RestrictedRoutes from "./RestrictedRoute";
const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));

export default function AppRoutes() {
  
  const isRefreshingUser = useSelector(selectIsRefreshing);

  return (
    isRefreshingUser ? (<h5>Refreshing user... Please wait</h5>) : 
    (<Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        {/* Приватні сторінки */}
        <Route path="register" element={<RestrictedRoutes component={<RegisterPage/>} />} />
        <Route path="login" element={<RestrictedRoutes component={<LoginPage/>}/>} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>)
  )
}