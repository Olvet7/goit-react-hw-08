// Home + Contacts
import css from "../Navigation/Navigation.module.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box } from "@mui/material";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      sx={{
        padding: "0 20px", 
        height: "60px",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        fontSize: "16px",
      }}
    >
      <NavLink to="/" className={css.link}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={css.link}>Contacts</NavLink>}
    </Box>
  );
}
