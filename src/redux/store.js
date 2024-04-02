import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer } from "./filtersSlice";
// import { contactReducer } from "./contactsSlice";
import { contactReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
    auth: authReducer,
  }
});

