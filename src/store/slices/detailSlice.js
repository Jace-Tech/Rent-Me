import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    property: null
}


const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        addProperty: (state, action) => {
            state.property = action.payload
        }
    }
})

export const { addProperty } = detailSlice.actions
export default detailSlice.reducer