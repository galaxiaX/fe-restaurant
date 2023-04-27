import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Restaurant {
  name: string;
  address: string;
  rating: number;
  status: string;
  latitude: number;
  longitude: number;
  placeId: string;
  photoUrl: string[];
}

export interface RestaurantsState {
  restaurants: Restaurant[];
}

const initialState: RestaurantsState = {
  restaurants: [],
};

const restaurantSlice = createSlice({
  name: "restaurantsList",
  initialState,
  reducers: {
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurants = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
