// packages
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import REDUX_DEFAULT_STATE from '@/constants/redux';
import { getCurrentDT } from '@/utils/getCurrentDT';

const notesSlice = createSlice({
  name: 'notes',
  initialState: REDUX_DEFAULT_STATE,
  reducers: {
    create(state, action) {
      const data: Note = {
        ...action.payload,
        id: uuidv4(),
        dateCreated: getCurrentDT(),
        dateUpdated: getCurrentDT(),
        pinned: false,
      };
      state.notes.unshift(data);
    },
    update(state, action) {
      state.notes = state.notes.map(note =>
        action.payload.id === note.id ? { ...action.payload, dateUpdated: getCurrentDT() } : note,
      );
    },
    move(state, action) {
      switch (action.payload.from) {
        case 'NOTES':
          state.notes = state.notes.filter(note => action.payload.data.id !== note.id);
          break;
        case 'ARCHIVE':
          state.archive = state.archive.filter(note => action.payload.data.id !== note.id);
          break;
        default:
          break;
      }
      state.trash.unshift(action.payload.data);
    },
    archive(state, action) {
      state.notes = state.notes.filter(note => action.payload.data.id !== note.id);
      state.archive.unshift(action.payload.data);
    },
    unarchive(state, action) {
      state.archive = state.archive.filter(note => action.payload.data.id !== note.id);
      state.notes.unshift(action.payload.data);
    },
    restore(state, action) {
      state.trash = state.trash.filter(note => action.payload.data.id !== note.id);
      state.notes.unshift(action.payload.data);
    },
    remove(state, action) {
      state.trash = state.trash.filter(note => action.payload.id !== note.id);
    },
    removeSelect(state, action) {
      state.trash = state.trash.filter(note => !action.payload.includes(note.id));
    },
    removeAll(state) {
      state.trash = [];
    },
    pin(state, action) {
      state.notes = state.notes.map(note =>
        action.payload.id === note.id ? { ...action.payload, pinned: true } : note,
      );
    },
    unpin(state, action) {
      state.notes = state.notes.map(note =>
        action.payload.id === note.id ? { ...action.payload, pinned: false } : note,
      );
    },
  },
});

export const { create, update, move, archive, unarchive, restore, remove, pin, unpin } = notesSlice.actions;
export default notesSlice.reducer;
