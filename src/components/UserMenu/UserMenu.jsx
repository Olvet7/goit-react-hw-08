import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <Box display="flex" alignItems="center" gap="20px">
      <AccountCircleIcon />
        <p>
          Hello, {user.name}!
          
        </p>
        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            dispatch(logOut());
          }}
          style={{ marginRight: "20px", color: "white", borderColor: "white", height: "20px"}}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
}
