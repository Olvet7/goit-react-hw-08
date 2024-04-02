import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));


export default function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={null}> 
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/register" element={<RegisterPage />}/>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}