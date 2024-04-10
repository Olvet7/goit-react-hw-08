// import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
// import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Container fixed>
      <Box
        sx={{
          height: "100vh",
          width: "100vh",
          padding: "0 0 ",
        }}
      >
        <AppBar />
        {/* <Outlet /> */}
        {/* {childeren} */}
        <Suspense fallback={<p>...Loading page</p>}>
          {children}
        </Suspense>
      </Box>
    </Container>
  );
}

{
  /* <Suspense fallback={<p>...Loading page</p>}>
          <Outlet />
        </Suspense> */
}
