// import packages below
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// import utils below
import { Notes } from '@/common/utils/note-types';
import { getCurrentDT } from '@/common/utils/getCurrentDT';

const initialState: Notes = {
  notes: [],
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
      const newState = state.notes.map(note =>
        action.payload.id === note.id ? { ...action.payload, dateUpdated: getCurrentDT() } : note,
      );

      state.notes = newState;
    },
    remove(state, action) {
      state.notes = state.notes.filter(note => action.payload !== note.id);
    },
  },
});

export const { create, update, remove } = notesSlice.actions;
export default notesSlice.reducer;
