// packages
import React, { Fragment, useCallback } from 'react';

// components
import Head from '@/components/Head';
import NoteHeader from '@/components/Notes/NoteHeader';
import NotesList from '@/components/Notes/NotesList';
import NoteItem from '@/components/Notes/NoteItem';
import NoteForm from '@/components/Notes/NoteForm';
import CustomModal from '@/components/Modal';

// helpers
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { pin, unpin, move, archive } from '@/features/notes/notes-slice';

// utils
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { toastSuccess } from '@/utils/notifications';

const NotesPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  console.log(notes);

  // pin handler
  const pinHandler = useCallback(
    (data: Note) => {
      dispatch(pin(data));
    },
    [dispatch],
  );

  // unpin handler
  const unpinHandler = useCallback(
    (data: Note) => {
      dispatch(unpin(data));
    },
    [dispatch],
  );

  // archive handler
  const archiveHandler = useCallback(
    (data: Note) => {
      dispatch(archive({ from: 'NOTES', data }));
      toastSuccess('Note archived');
    },
    [dispatch],
  );

  // remove handler
  const removeHandler = useCallback(
    (data: Note) => {
      dispatch(move({ from: 'NOTES', data }));
      toastSuccess('Note removed');
    },
    [dispatch],
  );

  // close modal handler
  const closeHandler = useCallback(() => {
    clearSelectHandler();
    onClose();
  }, [clearSelectHandler, onClose]);

  return (
    <Fragment>
      <Head title='Memo' />
      <NoteHeader onOpen={onOpen} />
      <NotesList>
        {notes.map((note: Note) => {
          return (
            <NoteItem
              key={note.id}
              note={note}
              onOpen={onOpen}
              onPin={() => pinHandler(note)}
              onUnpin={() => unpinHandler(note)}
              onArchive={() => archiveHandler(note)}
              onRemove={() => removeHandler(note)}
              onSelect={selectHandler}
            />
          );
        })}
      </NotesList>
      <CustomModal
        isOpen={isOpen}
        onClose={closeHandler}
        body={<NoteForm note={selected} onClose={closeHandler} />}
      />
    </Fragment>
  );
};

export default NotesPage;
