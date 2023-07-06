import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: localStorage.getItem('idToken')? true: false
}
const authSlice = createSlice({
name : 'Authentication',
initialState: initialState,
reducers: {
    logIn(state){
        state.isLoggedIn = true
    },
    logOut(state){
        localStorage.removeItem('idToken')
        localStorage.removeItem('Email')
        state.isLoggedIn = false
    }
}
});

export const  authAction = authSlice.actions;

export default authSlice.reducer