import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type resopnse = {
    id:number
    title:string
    prefix:string
    img:string
}[]
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get<resopnse>('http://localhost:5005/categories')
        return response.data
    } catch (err) {
        if(axios.isAxiosError(err)){
        return rejectWithValue(err.response?.data.message || err.message)
        }
        else {
           return rejectWithValue("Un expected error")
        }
    }
  }
);

export default actGetCategories
