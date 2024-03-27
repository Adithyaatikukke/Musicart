import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAllProductsByAscFilter,
  getAllProductsByColourFilter,
  getAllProductsByCompanyFilter,
  getAllProductsByDescFilter,
  getAllProductsByHeadTypeFilter,
  getAllProductsByKeywordFilter,
  getAllProductsByPriceFilter,
  getProducts,
  getSingleProduct,
} from "./ProductApi";

const initialState = {
  products: [],
  fetching: false,
  productToggle: false,
  error: "",
  singleProduct: {},
};

export const getAllProductsAsync = createAsyncThunk("product/get", async () => {
  const response = await getProducts();

  return response.data;
});

export const getSingleProductAsync = createAsyncThunk(
  "product/single",
  async (id) => {
    const response = await getSingleProduct(id);

    return response.data;
  }
);

export const getAllProductByHeadTypeFilterAsync = createAsyncThunk(
  "product/filter/headtype",
  async (headType) => {
    const response = await getAllProductsByHeadTypeFilter(headType);

    return response.data;
  }
);

export const getAllProductsByCompanyFilterAsync = createAsyncThunk(
  "product/filter/company",
  async (company) => {
    const response = await getAllProductsByCompanyFilter(company);

    return response.data;
  }
);

export const getAllProductsByColourFilterAsync = createAsyncThunk(
  "product/filter/colour",
  async (colour) => {
    const response = await getAllProductsByColourFilter(colour);
    return response.data;
  }
);

export const getAllProductsByPriceFilterAsync = createAsyncThunk(
  "product/filter/price",
  async (price) => {
    const response = await getAllProductsByPriceFilter(price);
    return response.data;
  }
);

export const getAllProductsByAscFilterAsync = createAsyncThunk(
  "product/filter/asc",
  async () => {
    const response = await getAllProductsByAscFilter();
    return response.data;
  }
);

export const getAllProductsByDescFilterAsync = createAsyncThunk(
  "product/filter/desc",
  async () => {
    const response = await getAllProductsByDescFilter();
    return response.data;
  }
);
export const getAllProductsByKeywordFilterAsync = createAsyncThunk(
  "product/filter/keyword",
  async (keyword) => {
    const response = await getAllProductsByKeywordFilter(keyword);
    return response.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (buider) => {
    buider
      .addCase(getAllProductsAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.fetching = false;
        state.products = products;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getSingleProductAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getSingleProductAsync.fulfilled, (state, action) => {
        const { product } = action.payload;
        state.fetching = false;
        state.singleProduct = product;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getSingleProductAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductByHeadTypeFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(
        getAllProductByHeadTypeFilterAsync.fulfilled,
        (state, action) => {
          const { products } = action.payload;
          state.products = products;

          state.fetching = false;

          state.productToggle = state.productToggle ? false : true;
        }
      )
      .addCase(getAllProductByHeadTypeFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByCompanyFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(
        getAllProductsByCompanyFilterAsync.fulfilled,
        (state, action) => {
          const { products } = action.payload;
          state.fetching = false;
          state.products = products;
          state.productToggle = state.productToggle ? false : true;
        }
      )
      .addCase(getAllProductsByCompanyFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByColourFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAllProductsByColourFilterAsync.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.fetching = false;
        state.products = products;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByColourFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByPriceFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAllProductsByPriceFilterAsync.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.fetching = false;
        state.products = products;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByPriceFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByAscFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAllProductsByAscFilterAsync.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.fetching = false;
        state.products = products;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByAscFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByDescFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAllProductsByDescFilterAsync.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.fetching = false;
        state.products = products;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByDescFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      })
      .addCase(getAllProductsByKeywordFilterAsync.pending, (state) => {
        state.fetching = true;
      })
      .addCase(
        getAllProductsByKeywordFilterAsync.fulfilled,
        (state, action) => {
          const { products } = action.payload;
          state.fetching = false;
          state.products = products;
          state.productToggle = state.productToggle ? false : true;
        }
      )
      .addCase(getAllProductsByKeywordFilterAsync.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload;
        state.productToggle = state.productToggle ? false : true;
      });
  },
});

export const products = (state) => state.product.products;
export const fetching = (state) => state.product.fetching;
export const singleProduct = (state) => state.product.singleProduct;
export const productToggle = (state) => state.product.productToggle;

export default productSlice.reducer;