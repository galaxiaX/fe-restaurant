import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import restaurantSlice from "./reducer";

// interface restaurantsState {
//   restaurants: [];
// }

// const initialState: restaurantsState = {
//   restaurants: [],
// };

// const restaurantSlice = createSlice({
//   name: "restaurantsList",
//   initialState,
//   reducers: {
//     setRestaurants: (state, action: PayloadAction<restaurantsState>) => {
//       state = action.payload;
//     },
//   },
// });

// export const { setRestaurants } = restaurantSlice.actions;

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default store;
