// import utils below
import { Component } from './types';

export interface Note {
  id: number;
  title: string;
  body: string;
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
  note: Note;
  onRemove: (id: number) => void;
}

export interface NotesListProps {
  render: Component;
}

export interface NoteFormProps {
  note?: Note;
  onClose: () => void;
}
