import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        isLogin : localStorage.getItem('isLogin') || false,
    },
    reducers : {
        login(state) {
            state.isLogin = true
            localStorage.setItem('isLogin', true)
        },
        logout(state) {
            state.isLogin = false
            localStorage.removeItem('isLogin')
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer