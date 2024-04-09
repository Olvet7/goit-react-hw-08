// import {changeFilter, selectNameFilter} from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import TextField from "@mui/material/TextField";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.inputBlock}>
      <TextField
        id="standard-basic"
        label="Search name"
        variant="standard"
        className={css.input}
        value={filter}
        onChange={handleInputChange}
        // border-color="var(--accent-color)"
        InputLabelProps={{
          style: { color: 'var(--accent-color)' } 
        }}
      />
    </div>
  );
}

{/* <p>Find contacts by name</p> */}
{/* <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Enter name"
      /> */}