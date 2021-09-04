import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { quotesAPI } from "./middleware/quotesAPI";

export default configureStore({ reducer, middleware: [quotesAPI] });
