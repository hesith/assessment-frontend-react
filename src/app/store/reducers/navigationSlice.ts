import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Navigation{
    id: string
}

const initialState : Navigation = {
    id: 'dashboard'
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setCurrentNavigation: (state, action: PayloadAction<Navigation>) => {
            state.id = action.payload.id;
        }
    }
})

export const {setCurrentNavigation} =  navigationSlice.actions
export default navigationSlice.reducer;