import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectLoading } from "../../redux/contacts/selectors";
import CircularProgress from '@mui/material/CircularProgress'


export default function Register() {

  const loader = useSelector(selectLoading);

  return (
    <div>
        <p>Not registered? It takes 30 sec 😉</p>
        {loader && <CircularProgress />}
        <RegistrationForm/>
    </div>
  )
}


