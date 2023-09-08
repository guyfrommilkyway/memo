// import packages below
import { createSlice } from '@reduxjs/toolkit';

// import utils below
import { Trash } from '@/common/utils/trash-types';

const initialState: Trash = {
  trash: [],
};

const trashSlice = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    restore() {},
  },
});

export const { restore } = trashSlice.actions;
export default trashSlice.reducer;
