import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <p>Hi, user! {user.name}✨</p>
      <Button variant="outlined"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </Button>
    </>
  );
}
