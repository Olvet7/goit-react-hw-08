import "./App.css";
import {useDispatch} from 'react-redux';
import AppRoutes from "./AppRoutes";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";

export default function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <div>
      <AppRoutes/>
    </div>
  );
}
