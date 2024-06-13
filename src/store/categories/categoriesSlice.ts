import { createSlice } from "@reduxjs/toolkit";

interface categories {
    records:{
        id:number,
        title:string,
        prefix:string,
        img:string
    }[] 
    loading: "idle" | "pending" | "succeeded" | "failed"
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
    reducers:{}
})

export default categorySlice.reducer