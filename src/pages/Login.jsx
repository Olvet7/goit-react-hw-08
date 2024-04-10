import LoginForm from "../components/LoginForm/LoginForm";
import { Box } from "@mui/material";
// Login
export default function Login() {
  return (
    <Box sx={{ color: "var(--accent-color)", marginTop: "20px" }}>
      <p>Let's log in!</p>
      <LoginForm />
    </Box>
  );
}
