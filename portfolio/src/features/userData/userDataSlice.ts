import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../models/types";

interface UserDataState {
  data: UserData[];
}

const initialState: UserDataState = {
  data: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
