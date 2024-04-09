// Home + Contacts + Search

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Box } from "@mui/material";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      sx={{height:"60px",
      display:"flex",
      flexDirection:"row",
      gap:"16px",
      alignItems: "center",
    fontSize: "20px"}}
    >
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Box>
  );
}
