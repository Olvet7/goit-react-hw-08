// Navigation
// AuthNav

import { useSelector } from "react-redux";
import { Container, AppBar as AppBarSide } from "@mui/material";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <Container >
      <AppBarSide position="static" sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "baseline",
          alignItems: "center",
          backgroundColor: "#ffc400",
          justifyContent: 'space-between',
          gap: "8px",
          height: '60px',
          padding: "0 0",
        }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarSide>
    </Container>
  );
}
