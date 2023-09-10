// import packages below
import { RawDraftContentState } from 'draft-js';

// import utils below
import { Component } from './prop-types';

export interface Note {
  id: string;
  title: string;
  body: RawDraftContentState;
  dateCreated: string;
  dateUpdated: string;
}

export interface Notes {
  notes: Note[];
  trash: Note[];
  archive: Note[];
}

export interface NoteFormInputs {
  title: string;
}

export interface NoteHeaderProps {
  onOpen: () => void;
}

export interface NoteItemProps {
  note: Note | null;
  onOpen: () => void;
  onSelect: (param: Note | null) => void;
  onArchive?: () => void;
  onUnarchive?: () => void;
  onRemove?: () => void;
  onRestore?: () => void;
}

export interface NotesListProps {
  render: Component;
}

export interface NoteFormProps {
  note?: Note | null;
  onClose: () => void;
}
