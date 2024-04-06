import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
const setAuthHeader = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = "";
}

// register - POST /users/signup
// Body: name, email, password
export const register = createAsyncThunk(
    "auth/register", 
    async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// login - POST /users/login
// Body: email, password
export const logIn = createAsyncThunk(
    "auth/login", 
    async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// logout - POST /users/logout
// Body: token
export const logOut = createAsyncThunk(
    "auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});