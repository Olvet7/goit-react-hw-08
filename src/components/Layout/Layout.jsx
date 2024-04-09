// import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, Container } from "@mui/material";

export default function Layout() {
  return (
    <Container fixed>
      <Box
        sx={{
          // bgcolor: "#cfe8fc",
          height: "100vh",
          width: "100vh",
          padding: "0 0 ",
        }}
      >
        <AppBar />
        <Suspense fallback={<p>...Loading page</p>}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
}
