import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface SideBar{
    isOpen: boolean
}

const initialState : SideBar = {
    isOpen: false
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setSidebar: (state, action: PayloadAction<SideBar>) => {
            state.isOpen = action.payload.isOpen;
        }
    }
})

export const {setSidebar} =  sidebarSlice.actions
export default sidebarSlice.reducer;