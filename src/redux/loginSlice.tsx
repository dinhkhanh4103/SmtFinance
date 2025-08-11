import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type initialType = {
  state: boolean;
};
const initialState: initialType = {
  state: false,
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    StatusLogin: (state: initialType, action: PayloadAction<boolean>) => {
      state.state = action.payload;
    },
  },
});

export const { StatusLogin } = loginSlice.actions;
export default loginSlice.reducer;
