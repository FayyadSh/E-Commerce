import { product } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type resopnse = product[]
const actGetProducts = createAsyncThunk(
  "products/actGetCategories",
  async (prefix:string,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get<resopnse>(`http://localhost:5005/products?cat_prefix=${prefix}`)
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

export default actGetProducts
