import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
      error: false,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(deleteContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.loading = false;
        })
        .addCase(deleteContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(addContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.items.unshift(action.payload);
          state.loading = false;
        })
        .addCase(addContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(logOut.fulfilled, (state) => {
          state.items = [];
          state.error = null;
          state.loading = false
        })
    },
  });
  
  export const contactReducer = contactsSlice.reducer;