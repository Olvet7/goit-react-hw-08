import { useSelector } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { selectLoading } from "../redux/contacts/selectors";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Register() {
  const loader = useSelector(selectLoading);

  return (
    <Box sx={{ color: "var(--accent-color)", marginTop: "20px" }}>
        <p>Not registered? It takes 30 sec 😉</p>
        {loader && <CircularProgress />}
        <RegistrationForm />
      </Box>
  );
}
