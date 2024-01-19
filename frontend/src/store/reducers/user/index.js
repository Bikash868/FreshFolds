import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  user: {
    name: '',
	email: ''
  }
}

export const usersSlice = createSlice({
  name:'user',
  initialState: usersInitialState,
  reducers: {
    setUser: (state, { payload: user }) => {
      state.user.isLoading = false;
      state.user = user;
    },
  }
})

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
