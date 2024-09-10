import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  images: string[];
}

const initialState: FavoritesState = {
  images: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.images));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((image) => image !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.images));
    },
    loadFavorites: (state) => {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        state.images = JSON.parse(savedFavorites);
      }
    },
  },
});

export const { addFavorite, removeFavorite, loadFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
