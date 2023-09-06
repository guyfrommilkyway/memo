// import packages below
import { RawDraftContentState } from 'draft-js';

// import utils below
import { Component } from './types';

export interface Note {
  id: string;
  title: string;
  body: RawDraftContentState;
  dateCreated: string;
  dateUpdated: string;
}

export interface Notes {
  notes: Note[];
}

export interface NoteFormInputs {
  title: string;
  body: string;
}

export interface NoteHeaderProps {
  onOpen: () => void;
}

export interface NoteItemProps {
  note: Note | undefined;
  onOpen: () => void;
  onRemove: (id: string) => void;
  onSelect: (param: Note) => void;
}

export interface NotesListProps {
  render: Component;
}

export interface NoteFormProps {
  note?: Note;
  onClose: () => void;
}
