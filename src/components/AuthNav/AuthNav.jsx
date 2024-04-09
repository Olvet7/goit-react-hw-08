import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function AuthNav() {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          fontSize: "16px",
          alignItems: "center",
        }}
      >
        <NavLink to="/register">
          <Typography variant="h7" component="div" color="white">
            Register
          </Typography>
        </NavLink>
        <NavLink to="/login">
          <Box sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <Typography variant="h7" component="div" color="white" sx={{paddingRight: "20px"}}>
            Log In
          </Typography>
          </Box>
        </NavLink>
      </Box>
    </div>
  );
}
