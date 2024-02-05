// Import the configureStore function from the "@reduxjs/toolkit" package
import { configureStore } from "@reduxjs/toolkit";
// Import the cartSlice reducer from the "./slices/cartSlice" file
import cartSlice from "./slices/cartSlice";

// Create a Redux store using the configureStore function
const store = configureStore({
  // Set the cart reducer for the store
  reducer: {
    cart: cartSlice,
  },
});

// Export the store as the default export of this module
export default store;
