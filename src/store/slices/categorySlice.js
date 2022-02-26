import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    category: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.category = [...state.category, action.payload]
        },
        removeCategory: (state, action) => {
            state.category = state.category.filter(category => category !== action.payload)
        }
    }
})

export const { addCategory, removeCategory} = categorySlice.actions

export default categorySlice.reducer