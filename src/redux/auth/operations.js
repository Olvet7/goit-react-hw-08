import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

// POST /users/signup
// Body: name, email, password
export const register = createAsyncThunk("auth/register", async () => {});

// POST /users/login
// Body: email, password
export const login = createAsyncThunk("auth/login", async () => {});

// POST /users/logout
// Body: token
export const logout = createAsyncThunk("auth/logout", async () => {});