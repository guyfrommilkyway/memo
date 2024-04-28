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
