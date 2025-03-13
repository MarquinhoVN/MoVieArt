import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
    listWatched: []
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }

      state.user = action.payload;
    },
    setListFavorites: (state, action) => {
      state.listFavorites = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorites = [...state.listFavorites].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    addFavorite: (state, action) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
    setListWatched: (state, action) => {
      state.listWatched = action.payload;
    },
    removeWatched: (state, action) => {
      const { mediaId } = action.payload;
      state.listWatched = [...state.listWatched].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    addWatched: (state, action) => {
      state.listWatched = [action.payload, ...state.listWatched];
    }
  }
});

export const {
  setUser,
  setListFavorites,
  addFavorite,
  removeFavorite,
  setListWatched,
  addWatched,
  removeWatched
} = userSlice.actions;

export default userSlice.reducer;
