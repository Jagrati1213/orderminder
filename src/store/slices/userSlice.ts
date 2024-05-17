import { createSlice } from "@reduxjs/toolkit";

interface userState {
  user: {
    username: string | null;
    email: string | null;
    id: string | null;
    menuItems?: string[];
  };
}

// Define the initial state using that type
const initialState: userState = {
  user: {
    id: null,
    username: null,
    email: null,
    menuItems: [],
  },
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const newUser = action?.payload;
      state.user = { ...newUser };
    },
    removeUser: (state) => {
      state.user = {
        username: null,
        email: null,
        id: null,
        menuItems: [],
      };
    },
  },
});

export const { setUserDetails, removeUser } = userSlice.actions;
export default userSlice.reducer;
