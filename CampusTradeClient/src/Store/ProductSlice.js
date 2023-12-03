import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdDetailsApi } from "../apis";
const initialState = {
  adDetails: {
    title: "",
    price: "",
    age: "",
    desc: "",
    subtitle: "",
    tags: [],
    features: [],
    images: [],
    date: "",
    likes: 0,
    views: 0,
    sellerMail: "",
  },
};

export const fetchAdDetails = createAsyncThunk("api", async (id) => {
  try {
    const response = await fetchAdDetailsApi(id);
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
