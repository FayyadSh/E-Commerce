import { category } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type resopnse = category[]
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
    ;
  }
);

export default actGetCategories
