import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { loading } from "@customTypes/shared";
import { category } from "@customTypes/category";

interface categories {
    records: category[]
    loading: loading
    error:string | null
}
const initialState : categories = {
    records:[],
    loading:"idle",
    error:null
}

const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(actGetCategories.pending ,(state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled ,(state,action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetCategories.rejected ,(state,action) => {
            state.loading = 'failed'
            if(action.payload && typeof action.payload === 'string'){
                state.error = action.payload
            }
        })
    },
})

export {actGetCategories}
export default categorySlice.reducer