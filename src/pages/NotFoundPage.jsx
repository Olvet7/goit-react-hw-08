import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Box sx={{backgroundImage: "linear-gradient(to bottom left orange, white)", height: "100%"}}>
        <Typography variant="subtitle1" gutterBottom>
          Oops! Something went wrong!
        </Typography>
        <Link to="/">Home Page</Link>
      </Box>
    </>
  );
}
