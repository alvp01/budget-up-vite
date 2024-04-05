import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface DateState {
  date: string;
}

const initialState: DateState = {
  date: new Date().toString(),
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export default dateSlice.reducer;