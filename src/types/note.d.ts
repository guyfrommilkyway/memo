interface Note {
  id: string;
  title: string;
  body: MyRawDraftContentState;
  dateCreated: string;
  dateUpdated: string;
  pinned: boolean;
}

interface Notes {
  notes: Note[];
  trash: Note[];
  archive: Note[];
}

interface NoteFormInputs {
  title: string;
}

interface NoteHeaderProps {
  onOpen: () => void;
}

interface NoteItemProps {
  note: Note | null;
  onOpen: () => void;
  onSelect: (param: Note | null) => void;
  onArchive?: () => void;
  onUnarchive?: () => void;
  onRemove?: () => void;
  onRestore?: () => void;
}

interface NotesListProps {
  render: Component;
}

interface NoteFormProps {
  note?: Note | null;
  onClose: () => void;
}
