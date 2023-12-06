import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdDetailsApi } from "../apis";
const initialState = {
  adDetails: {
    id: "",
    title: "",
    price: "",
    age: "",
    desc: "",
    subtitle: "",
    tags: [],
    features: [],
    img_id: [],
    date: "",
    likes: 0,
    sold:false,
    buyer:"",
    views: 0,
    sellerMail: "",
  },
};

export const fetchAdDetails = createAsyncThunk("Product/fetch", async (id) => {
  try {
    // console.log(id);
    const response = await fetchAdDetailsApi(id);
    // console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
export const productSlice = createSlice({
  name: "ad",
  initialState,

  reducers: {
    changeProduct: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdDetails.fulfilled, (state, action) => {
      state.adDetails = {
        ...action.payload,
      };
    });
    builder.addCase(fetchAdDetails.pending, (state, action) => {
      state.adDetails = initialState.adDetails;
    });
    builder.addCase(fetchAdDetails.rejected, (state, action) => {
      state.adDetails = initialState.adDetails;
    });
  },
});
export const { changeProduct } = productSlice.actions;
export default productSlice.reducer;
