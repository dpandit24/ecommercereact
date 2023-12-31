import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userId: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state,action) => {
        console.log(action.payload);
        // const 
    }
  }
});

export const {SET_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export const selectEmail = (state) => state.auth.email

export const selectUserName = (state) => state.auth.userName

export const selectUserId = (state) => state.auth.userId

export default authSlice.reducer