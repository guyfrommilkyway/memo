// import packages below
import { createSlice } from '@reduxjs/toolkit';

// import utils below
import { Notes } from '@/common/utils/note-types';

const initialState: Notes = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    create(state, action) {
      state.notes = [...state.notes, { ...action.payload, id: new Date() }];
    },
    update(state, action) {
      state.notes = state.notes.map((note) => (action.payload.id === note.id ? action.payload : note));
    },
    remove(state, action) {
      state.notes = state.notes.filter((note) => action.payload !== note.id);
    },
  },
});

export const { create, update, remove } = notesSlice.actions;
export default notesSlice.reducer;
