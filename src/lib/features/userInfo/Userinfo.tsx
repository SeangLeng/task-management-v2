import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  email: ''
}

export const userInformation = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearUser: () => initialState,
  }

});

export const { setUser, clearUser } = userInformation.actions;
export default userInformation.reducer;