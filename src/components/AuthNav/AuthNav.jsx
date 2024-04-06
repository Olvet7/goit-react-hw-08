import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";
import { Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export default function AuthNav() {
  return (
    <div>
      <Toolbar sx={{ display: "flex", gap: "16px", fontSize: "16px" }}>
        <NavLink to="/register">
          <Typography variant="h6" component="div">Register</Typography>
        </NavLink>
        <NavLink to="/login"><Typography variant="h6" component="div">Log In <LoginIcon /></Typography>
        </NavLink>
      </Toolbar>
    </div>
  );
}
