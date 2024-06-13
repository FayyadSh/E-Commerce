import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { loading } from "@customTypes/shared";
import { product } from "@customTypes/product";

interface categories {
    records: product[]
    loading: loading
    error:string | null
}
const initialState : categories = {
    records:[],
    loading:"idle",
    error:null
}

const prodcutsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        cleanUp : (state) => {
            state.records = []
        }
    },
    extraReducers(builder) {
        builder.addCase(actGetProducts.pending ,(state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProducts.fulfilled ,(state,action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        })
        builder.addCase(actGetProducts.rejected ,(state,action) => {
            state.loading = 'failed'
            if(action.payload && typeof action.payload === 'string'){
                state.error = action.payload
            }
        })
    },
})

export const {cleanUp} = prodcutsSlice.actions
export {actGetProducts}
export default prodcutsSlice.reducer