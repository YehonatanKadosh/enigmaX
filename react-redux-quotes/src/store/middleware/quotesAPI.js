import axios from "axios";
import { API_CALL, quotesRequested, quotesRequestFailed } from "../quotes";

export const quotesAPI =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // if its not an api call
    if (action.type !== API_CALL.type) return next(action);

    const { url, onStart, method, data, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    else dispatch({ type: quotesRequested.type });

    try {
      const response = await axios.request({
        baseURL: process.env.REACT_APP_BASE_QUOTES_URL,
        url, // /qod | /list ...
        method: method || "GET",
        data,
        headers: {
          "X-TheySaidSo-Api-Secret": process.env.REACT_APP_QUOTE_API_KEY,
        },
      });
      const result = response.data.contents;
      dispatch({ type: onSuccess, payload: result });
    } catch (err) {
      if (onError) dispatch({ type: onError, payload: err.message });
      dispatch({ type: quotesRequestFailed.type, payload: err.message });
    }
  };
