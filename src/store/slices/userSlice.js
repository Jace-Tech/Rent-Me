import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})


export const { addUser } = userSlice.actions
export default userSlice.reducer