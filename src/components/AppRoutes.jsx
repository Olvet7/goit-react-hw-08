// // всі лезі сторінки

// import { lazy } from "react";

// import Layout from "./Layout/Layout";




// export default function AppRoutes() {
//   const isRefreshingUser = useSelector(selectIsRefreshing);

//   return isRefreshingUser ? (
//     <h5>Refreshing user... Please wait</h5>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />

//         <Route
//           path="register"
//           element={<RestrictedRoutes component={<RegisterPage />} />}
//         />
//         <Route
//           path="login"
//           element={<RestrictedRoutes component={<LoginPage />} />}
//         />

//         <Route
//           path="contacts"
//           element={<PrivetRoute component={<ContactsPage />} redirectTo="/login" />}
//         />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// }

// // isLoggedIn False
// // App > Layout > RestrictedRoute > LoginPage
// // isLoggedIn True
// // App > Layout > Contacts
