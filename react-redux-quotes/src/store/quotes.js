import { createSlice, createAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "quotes",
  initialState: {
    quote: undefined,
    categories: undefined,
    loading: false,
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.quotes[0];
      state.loading = false;
    },
    initCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.loading = false;
    },
    quotesRequested: (state) => {
      state.loading = true;
    },
    quotesRequestFailed: (state) => {
      state.loading = false;
    },
  },
});

export const { quotesRequested, quotesRequestFailed } = slice.actions;
export default slice.reducer;
export const API_CALL = createAction("API_CALL");

// action creators
export const get_quote_of_the_day = (category) =>
  API_CALL({
    url: `/qod${category && "/" + category}`,
    onSuccess: slice.actions.setQuote,
  });
export const init_categories = () =>
  API_CALL({
    url: "/qod/categories",
    onSuccess: slice.actions.initCategories,
  });

export const get_categories = (state) => state.quotes.categories;
export const get_quote = (state) => ({
  quote: state.quotes.quote,
  loading: state.quotes.loading,
});
