// import packages below
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// import utils below
import { Notes } from '@/common/utils/note-types';
import { getCurrentDT } from '@/common/utils/getCurrentDT';

const initialState: Notes = {
  notes: [],
  trash: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    create(state, action) {
      state.notes = [
        { ...action.payload, id: uuidv4(), dateCreated: getCurrentDT(), dateUpdated: getCurrentDT() },
        ...state.notes,
      ];
    },
    update(state, action) {
      state.notes = state.notes.map(note =>
        action.payload.id === note.id ? { ...action.payload, dateUpdated: getCurrentDT() } : note,
      );
    },
    move(state, action) {
      const note = state.notes.find(note => note.id === action.payload);

      // guard
      if (typeof note === 'undefined') return;

      state.notes = state.notes.filter(note => action.payload !== note.id);
      state.trash.unshift(note);
    },
    restore(state, action) {
      const note = state.trash.find(note => note.id === action.payload);

      // guard
      if (typeof note === 'undefined') return;

      state.trash = state.trash.filter(note => action.payload !== note.id);
      state.notes.unshift(note);
    },
    remove(state, action) {
      state.trash = state.trash.filter(note => action.payload !== note.id);
    },
  },
});

export const { create, update, move, restore, remove } = notesSlice.actions;
export default notesSlice.reducer;
