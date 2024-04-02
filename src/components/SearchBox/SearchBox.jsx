// import {changeFilter, selectNameFilter} from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox () {

  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value))
  };

  return (
    <div className={css.inputBlock}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
}
