import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User{
    firstName: string,
    lastName: string,
    email: string
}

const initialState : User = {
    firstName: '',
    lastName: '',
    email: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        clearUserData: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.email = '';
        }
    }
})

export const {setUserData, clearUserData} =  userSlice.actions
export default userSlice.reducer;