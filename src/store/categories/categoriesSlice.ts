import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    records:[],
    loading:"idle",
    error:null
}

const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{}
})

export default categorySlice.reducer